#!/usr/bin/env node
/**
 * Smoke-tests every website form's backend wiring:
 *   1. Discovers every `formName` used in components/ and app/
 *   2. POSTs a realistic dummy payload to /api/forms for each one
 *   3. POSTs a dummy multipart payload (with a fake PDF) to /api/funding-application
 *   4. Verifies each submission actually landed in Postgres
 *   5. Deletes the test rows it created
 *
 * Usage:
 *   node scripts/test-forms.mjs
 *   BASE_URL=https://your-preview-url.vercel.app node scripts/test-forms.mjs
 *
 * Requires the dev server (or the target BASE_URL) to be running and
 * DATABASE_URL to be set (loaded automatically from .env.local if present).
 */

import { readFileSync, existsSync } from 'node:fs'
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { Pool } from 'pg'

const ROOT = new URL('..', import.meta.url).pathname
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
const MARKER = `SmokeTest_${Date.now()}`

// ─── Load DATABASE_URL from .env.local if not already set ─────────────────
if (!process.env.DATABASE_URL) {
  const envPath = join(ROOT, '.env.local')
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^DATABASE_URL\s*=\s*(.+)$/)
      if (m) {
        process.env.DATABASE_URL = m[1].trim().replace(/^["']|["']$/g, '')
        break
      }
    }
  }
}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL not set and not found in .env.local. Aborting.')
  process.exit(1)
}

// ─── Discover every formName used across the codebase ──────────────────────
function findFormNames(dir, results = new Set()) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.next' || entry.startsWith('.')) continue
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      findFormNames(full, results)
    } else if (/\.(tsx?|jsx?)$/.test(entry)) {
      const content = readFileSync(full, 'utf8')
      const matches = content.matchAll(/formName['"]?\s*:\s*['"]([a-zA-Z0-9_]+)['"]/g)
      for (const m of matches) results.add(m[1])
    }
  }
  return results
}

const formNames = [...findFormNames(join(ROOT, 'components')), ...findFormNames(join(ROOT, 'app'))]
const uniqueFormNames = [...new Set(formNames)].sort()

// ─── Run tests ───────────────────────────────────────────────────────────
async function testJsonForm(formName) {
  const email = `test+${formName}@example.com`
  try {
    const res = await fetch(`${BASE_URL}/api/forms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formName,
        firstName: MARKER,
        lastName: 'Form',
        email,
        phone: '+10000000000',
        message: `Automated smoke test for ${formName}`,
      }),
    })
    const body = await res.json().catch(() => ({}))
    return { formName, ok: res.ok && body.ok === true, status: res.status, error: body.error }
  } catch (err) {
    return { formName, ok: false, status: 0, error: err.message }
  }
}

async function testFundingApplication() {
  const formName = 'funding_application'
  try {
    const fd = new FormData()
    fd.append('firstName', MARKER)
    fd.append('lastName', 'Funding')
    fd.append('email', 'test+funding_application@example.com')
    fd.append('phone', '+10000000000')
    fd.append('companyName', 'Smoke Test Co')
    fd.append('industry', 'SaaS')
    fd.append('website', 'https://example.com')
    fd.append('streetAddress', '123 Main St')
    fd.append('city', 'Vancouver')
    fd.append('state', 'BC')
    fd.append('country', 'Canada')
    fd.append('businessSummary', 'Automated smoke test')
    fd.append('problem', 'Testing')
    fd.append('solution', 'Testing')
    fd.append('stage', 'MVP')
    fd.append('basedInCanada', 'yes')
    fd.append('agreedToTerms', 'true')
    fd.append('pitchDeck', new Blob(['%PDF-1.4 fake test file'], { type: 'application/pdf' }), 'test-pitch.pdf')

    const res = await fetch(`${BASE_URL}/api/funding-application`, { method: 'POST', body: fd })
    const body = await res.json().catch(() => ({}))
    return { formName, ok: res.ok && body.ok === true, status: res.status, error: body.error }
  } catch (err) {
    return { formName, ok: false, status: 0, error: err.message }
  }
}

async function verifyAndCleanupDb(expectedCount) {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  try {
    const res = await pool.query('SELECT form_name FROM form_submissions WHERE first_name = $1', [MARKER])
    const savedFormNames = new Set(res.rows.map((r) => r.form_name))
    await pool.query('DELETE FROM form_submissions WHERE first_name = $1', [MARKER])
    return { savedCount: res.rowCount, expectedCount, savedFormNames }
  } finally {
    await pool.end()
  }
}

async function main() {
  console.log(`Testing against ${BASE_URL}`)
  console.log(`Discovered ${uniqueFormNames.length} form(s): ${uniqueFormNames.join(', ')}\n`)

  const results = []
  for (const formName of uniqueFormNames) {
    results.push(await testJsonForm(formName))
  }
  results.push(await testFundingApplication())

  const dbCheck = await verifyAndCleanupDb(results.length)

  console.log('Form Name'.padEnd(38), 'API', 'DB Saved')
  console.log('-'.repeat(60))
  let failures = 0
  for (const r of results) {
    const apiStatus = r.ok ? 'OK ' : 'FAIL'
    const dbSaved = dbCheck.savedFormNames.has(r.formName) ? 'yes' : 'NO'
    if (!r.ok || dbSaved === 'NO') failures++
    console.log(
      r.formName.padEnd(38),
      apiStatus.padEnd(4),
      dbSaved,
      r.error ? `  (${r.error})` : ''
    )
  }

  console.log('\n' + '-'.repeat(60))
  console.log(`${results.length - failures}/${results.length} forms passed.`)

  if (failures > 0) {
    console.error(`\n${failures} form(s) FAILED. See table above.`)
    process.exit(1)
  } else {
    console.log('\nAll forms working correctly (API + database).')
    console.log('Note: this script does not verify email delivery — check your inbox periodically.')
  }
}

main().catch((err) => {
  console.error('Test script crashed:', err)
  process.exit(1)
})
