import { readFile, writeFile, stat } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(__dirname, '../public')

const FILES = [
  'images/landing/behind.svg',
  'images/landing/team1.svg',
  'images/Entrepreneurship/programs.svg',
  'images/Entrepreneurship/program.svg',
  'images/Entrepreneurship/heroo.svg',
  'images/about/academy.svg',
  'images/about/IMG_0881.svg',
]

async function extractAndConvert(rel) {
  const src = join(PUBLIC, rel)
  const dst = src.replace(/\.svg$/, '.webp')

  const text = await readFile(src, 'utf8')

  // Find all embedded base64 images
  const regex = /data:(image\/(?:jpeg|png|gif|webp));base64,([A-Za-z0-9+/=]+)/g
  const matches = [...text.matchAll(regex)]

  if (matches.length === 0) {
    console.log(`✗ ${rel}: no embedded images found`)
    return
  }

  // Use the largest embedded image (main photo)
  let biggest = matches[0]
  for (const m of matches) {
    if (m[2].length > biggest[2].length) biggest = m
  }

  const mimeType = biggest[1]
  const b64 = biggest[2]
  const buffer = Buffer.from(b64, 'base64')

  await sharp(buffer).webp({ quality: 82 }).toFile(dst)

  const [oldStat, newStat] = await Promise.all([stat(src), stat(dst)])
  const oldMB = (oldStat.size / 1024 / 1024).toFixed(1)
  const newKB = (newStat.size / 1024).toFixed(0)
  const saved = (((oldStat.size - newStat.size) / oldStat.size) * 100).toFixed(0)
  console.log(`✓ ${rel}`)
  console.log(`  ${oldMB}MB → ${newKB}KB  (${saved}% smaller)  [${matches.length} embedded image(s), used largest]`)
}

console.log('Extracting embedded photos from SVGs...\n')
for (const f of FILES) {
  await extractAndConvert(f)
}
console.log('\nDone. Update your component src paths: .svg → .webp')
