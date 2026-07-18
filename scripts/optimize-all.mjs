/**
 * Converts all large images (JPG/PNG/JPEG/JPG-uppercase) > THRESHOLD_KB to WebP.
 * For SVGs with embedded base64 photos, extracts the largest embedded image.
 * Skips files that already have a same-name .webp counterpart.
 * Outputs a JSON map of { oldRelPath: newRelPath } for code updates.
 */
import sharp from 'sharp'
import { readFile, writeFile, stat, readdir } from 'fs/promises'
import { join, relative, dirname, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { existsSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(__dirname, '../public')
const THRESHOLD = 80 * 1024 // 80 KB

// Walk directory recursively
async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

async function convertRaster(src) {
  const dst = src.replace(/\.(jpe?g|JPE?G|png|PNG|gif|GIF)$/, '.webp')
  if (src === dst) return null
  if (existsSync(dst)) return { src, dst, skipped: true }
  try {
    await sharp(src).webp({ quality: 80 }).toFile(dst)
    const [os, ns] = await Promise.all([stat(src), stat(dst)])
    return { src, dst, oldSize: os.size, newSize: ns.size }
  } catch (e) {
    return { src, dst, error: e.message }
  }
}

async function convertSvgBase64(src) {
  const dst = src.replace(/\.svg$/, '.webp')
  if (existsSync(dst)) {
    const s = await stat(dst)
    if (s.size > 20 * 1024) return { src, dst, skipped: true } // already done well
  }
  try {
    const text = await readFile(src, 'utf8')
    const regex = /data:(image\/(?:jpeg|png|gif|webp));base64,([A-Za-z0-9+/=]+)/g
    const matches = [...text.matchAll(regex)]
    if (matches.length === 0) return null
    // pick largest embedded image
    let biggest = matches[0]
    for (const m of matches) if (m[2].length > biggest[2].length) biggest = m
    const buf = Buffer.from(biggest[2], 'base64')
    await sharp(buf).webp({ quality: 82 }).toFile(dst)
    const [os, ns] = await Promise.all([stat(src), stat(dst)])
    if (ns.size < 15 * 1024) {
      // result too tiny — extracted image was probably tiny; skip
      return { src, dst, error: 'extracted image too small to be useful' }
    }
    return { src, dst, oldSize: os.size, newSize: ns.size }
  } catch (e) {
    return { src, dst, error: e.message }
  }
}

// Re-compress oversized WebPs that came from the previous run
async function recompressWebp(src) {
  const s = await stat(src)
  if (s.size < 500 * 1024) return null // under 500KB already fine
  const tmp = src + '.tmp.webp'
  try {
    await sharp(src).webp({ quality: 75 }).toFile(tmp)
    const ns = await stat(tmp)
    if (ns.size < s.size * 0.85) {
      // worth it — overwrite
      await writeFile(src, await readFile(tmp))
      return { src, oldSize: s.size, newSize: ns.size }
    }
    return null
  } finally {
    if (existsSync(tmp)) {
      const { unlink } = await import('fs/promises')
      await unlink(tmp)
    }
  }
}

const RASTER_EXT = new Set(['.jpg', '.jpeg', '.JPG', '.JPEG', '.png', '.PNG', '.gif', '.GIF'])
const SVG_EXT = new Set(['.svg'])

const conversions = [] // { oldRel, newRel }
let totalSaved = 0

console.log('Scanning images...\n')

for await (const file of walk(PUBLIC)) {
  const ext = extname(file)
  const s = await stat(file)

  if (RASTER_EXT.has(ext) && s.size >= THRESHOLD) {
    const result = await convertRaster(file)
    if (!result) continue
    if (result.skipped) {
      console.log(`  skip (webp exists): ${relative(PUBLIC, result.src)}`)
    } else if (result.error) {
      console.log(`  ERR  ${relative(PUBLIC, result.src)}: ${result.error}`)
    } else {
      const saved = result.oldSize - result.newSize
      totalSaved += saved
      console.log(`  ✓  ${relative(PUBLIC, result.src)}`)
      console.log(`       ${kb(result.oldSize)} → ${kb(result.newSize)}  (${pct(saved, result.oldSize)} saved)`)
      conversions.push({
        oldRel: '/' + relative(PUBLIC, result.src).replace(/\\/g, '/'),
        newRel: '/' + relative(PUBLIC, result.dst).replace(/\\/g, '/'),
      })
    }
  }

  if (SVG_EXT.has(ext) && s.size >= THRESHOLD) {
    const result = await convertSvgBase64(file)
    if (!result) continue
    if (result.skipped) {
      console.log(`  skip (webp exists): ${relative(PUBLIC, result.src)}`)
    } else if (result.error) {
      console.log(`  ERR  ${relative(PUBLIC, result.src)}: ${result.error}`)
    } else {
      const saved = result.oldSize - result.newSize
      totalSaved += saved
      console.log(`  ✓  ${relative(PUBLIC, result.src)}  [SVG→WebP]`)
      console.log(`       ${kb(result.oldSize)} → ${kb(result.newSize)}  (${pct(saved, result.oldSize)} saved)`)
      conversions.push({
        oldRel: '/' + relative(PUBLIC, result.src).replace(/\\/g, '/'),
        newRel: '/' + relative(PUBLIC, result.dst).replace(/\\/g, '/'),
      })
    }
  }

  if (ext === '.webp') {
    const result = await recompressWebp(file)
    if (result) {
      totalSaved += result.oldSize - result.newSize
      console.log(`  ✓  recompressed: ${relative(PUBLIC, result.src)}`)
      console.log(`       ${kb(result.oldSize)} → ${kb(result.newSize)}`)
    }
  }
}

console.log(`\nTotal saved: ${mb(totalSaved)}`)
console.log(`Files converted: ${conversions.length}`)

// Write manifest for code updater
await writeFile(
  join(__dirname, 'conversion-map.json'),
  JSON.stringify(conversions, null, 2)
)
console.log('\nManifest written to scripts/conversion-map.json')

function kb(b) { return (b / 1024).toFixed(0) + 'KB' }
function mb(b) { return (b / 1024 / 1024).toFixed(1) + 'MB' }
function pct(saved, orig) { return ((saved / orig) * 100).toFixed(0) + '%' }
