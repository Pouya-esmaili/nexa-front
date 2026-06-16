const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..", "public", "images");

// [relative path under public/images, output max dimension(s), mode]
const targets = [
  { file: "Entrepreneurship/herooo.svg", width: 1920 },
  { file: "investment/france.svg", width: 1200 },
  { file: "about/trip.svg", width: 800 },
  { file: "about/craft.svg", width: 800 },
  { file: "about/autilab.svg", width: 800 },
  { file: "about/vision.svg", width: 800 },
  { file: "about/preventigene.svg", width: 800 },
  { file: "about/diacocenter.svg", width: 800 },
  { file: "startup/uk.svg", width: 600 },
];

function extractBase64(file) {
  const data = fs.readFileSync(file, "latin1");
  const m = data.match(/data:image\/(\w+);base64,([^"]+)/);
  if (!m) throw new Error("no embedded image found in " + file);
  return Buffer.from(m[2], "base64");
}

async function main() {
  for (const t of targets) {
    const full = path.join(root, t.file);
    const buf = extractBase64(full);
    const out = full.replace(/\.svg$/, ".webp");
    await sharp(buf).resize({ width: t.width }).webp({ quality: 80 }).toFile(out);
    const stat = fs.statSync(out);
    console.log("wrote", path.relative(process.cwd(), out), (stat.size / 1024).toFixed(0), "KB");
  }
  console.log("Done");
}
main().catch((e) => { console.error(e); process.exit(1); });
