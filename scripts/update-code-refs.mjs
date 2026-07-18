/**
 * Updates all image src references in .tsx/.ts/.js/.css files
 * based on the conversion map, replacing old paths with new .webp paths.
 */
import { readFile, writeFile, readdir } from 'fs/promises'
import { join, dirname, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const MAP = JSON.parse(await readFile(join(__dirname, 'conversion-map-better.json'), 'utf8'))

const CODE_DIRS = ['app', 'components']
const CODE_EXTS = new Set(['.tsx', '.ts', '.js', '.jsx', '.css'])

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

let filesChanged = 0
let totalReplacements = 0

for (const dir of CODE_DIRS) {
  for await (const file of walk(join(ROOT, dir))) {
    if (!CODE_EXTS.has(extname(file))) continue
    let content = await readFile(file, 'utf8')
    let changed = false
    let replacements = 0
    for (const { oldRel, newRel } of MAP) {
      // Match both quoted and unquoted occurrences
      const escaped = oldRel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const regex = new RegExp(escaped, 'g')
      const count = (content.match(regex) || []).length
      if (count > 0) {
        content = content.replace(regex, newRel)
        replacements += count
        changed = true
      }
    }
    if (changed) {
      await writeFile(file, content)
      filesChanged++
      totalReplacements += replacements
      console.log(`  updated (${replacements} refs): ${file.replace(ROOT + '/', '')}`)
    }
  }
}

console.log(`\nDone: ${totalReplacements} replacements across ${filesChanged} files`)
