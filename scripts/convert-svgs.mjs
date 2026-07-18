import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(__dirname, '../public')

const LARGE_SVGS = [
  'images/landing/behind.svg',
  'images/landing/team1.svg',
  'images/Entrepreneurship/programs.svg',
  'images/Entrepreneurship/program.svg',
  'images/Entrepreneurship/heroo.svg',
  'images/about/academy.svg',
  'images/about/IMG_0881.svg',
]

async function convertSVG(rel) {
  const src = join(PUBLIC, rel)
  const dst = src.replace(/\.svg$/, '.webp')
  try {
    const info = await sharp(src, { density: 144 })
      .webp({ quality: 82 })
      .toFile(dst)
    const [oldStat, newStat] = await Promise.all([stat(src), stat(dst)])
    const oldKB = (oldStat.size / 1024).toFixed(0)
    const newKB = (newStat.size / 1024).toFixed(0)
    const saved = (((oldStat.size - newStat.size) / oldStat.size) * 100).toFixed(0)
    console.log(`✓ ${rel}`)
    console.log(`  ${oldKB}KB → ${newKB}KB  (${saved}% smaller)`)
  } catch (e) {
    console.log(`✗ ${rel}: ${e.message}`)
  }
}

console.log('Converting large SVGs to WebP...\n')
for (const f of LARGE_SVGS) {
  await convertSVG(f)
}
console.log('\nDone.')
