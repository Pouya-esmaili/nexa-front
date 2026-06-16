const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dir = path.join(__dirname, "..", "public", "images", "ourteam");

// fake-svg files containing an embedded base64 raster; target = square crop size in px
// (except the hero image, which keeps its aspect ratio)
const fakeSvgGrid = {
  "ali.svg": 600,
  "amirmohammad.svg": 600,
  "gelareh.svg": 600,
  "lida.svg": 600,
  "mahsa.svg": 600,
  "milad.svg": 600,
  "narges.svg": 600,
  "parastoo.svg": 600,
  "pouya.svg": 600,
};
const fakeSvgAvatar = { "hadi.svg": 320 }; // small circular avatar
const fakeSvgHero = { "IMG_0891 2.svg": 1920 }; // wide hero, keep aspect ratio

const plainRaster = ["iman.png", "sajjad.png"]; // already real rasters, just recompress

function extractBase64(file) {
  const data = fs.readFileSync(file, "latin1");
  const m = data.match(/data:image\/(\w+);base64,([^"]+)/);
  if (!m) throw new Error("no embedded image found in " + file);
  return Buffer.from(m[2], "base64");
}

async function main() {
  for (const [fn, size] of Object.entries(fakeSvgGrid)) {
    const buf = extractBase64(path.join(dir, fn));
    const out = path.join(dir, fn.replace(/\.svg$/, ".webp"));
    await sharp(buf).resize(size, size, { fit: "cover" }).webp({ quality: 82 }).toFile(out);
    console.log("wrote", path.relative(process.cwd(), out));
  }

  for (const [fn, size] of Object.entries(fakeSvgAvatar)) {
    const buf = extractBase64(path.join(dir, fn));
    const out = path.join(dir, fn.replace(/\.svg$/, ".webp"));
    await sharp(buf).resize(size, size, { fit: "cover" }).webp({ quality: 85 }).toFile(out);
    console.log("wrote", path.relative(process.cwd(), out));
  }

  for (const [fn, width] of Object.entries(fakeSvgHero)) {
    const buf = extractBase64(path.join(dir, fn));
    const out = path.join(dir, fn.replace(/\.svg$/, ".webp"));
    await sharp(buf).resize({ width }).webp({ quality: 80 }).toFile(out);
    console.log("wrote", path.relative(process.cwd(), out));
  }

  for (const fn of plainRaster) {
    const src = path.join(dir, fn);
    const out = path.join(dir, fn.replace(/\.png$/, ".webp"));
    await sharp(src).webp({ quality: 85 }).toFile(out);
    console.log("wrote", path.relative(process.cwd(), out));
  }

  console.log("Done");
}
main().catch((e) => { console.error(e); process.exit(1); });
