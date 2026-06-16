const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const IMAGE_DIR = path.join(__dirname, '..', 'public', 'images');

async function walk(dir) {
    let results = [];
    const list = await fs.readdir(dir, { withFileTypes: true });
    for (const dirent of list) {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            results = results.concat(await walk(res));
        } else {
            results.push(res);
        }
    }
    return results;
}

function isRaster(file) {
    const ext = path.extname(file).toLowerCase();
    return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
}

async function optimize(file) {
    try {
        const dir = path.dirname(file);
        const name = path.basename(file, path.extname(file));

        const webpPath = path.join(dir, `${name}.webp`);
        const avifPath = path.join(dir, `${name}.avif`);

        // Skip if target exists and is newer
        const srcStat = await fs.stat(file);

        let doWebp = true;
        let doAvif = true;
        try {
            const s = await fs.stat(webpPath);
            if (s.mtimeMs >= srcStat.mtimeMs) doWebp = false;
        } catch { }
        try {
            const s = await fs.stat(avifPath);
            if (s.mtimeMs >= srcStat.mtimeMs) doAvif = false;
        } catch { }

        if (doWebp) {
            await sharp(file).webp({ quality: 75 }).toFile(webpPath);
            console.log('wrote', path.relative(process.cwd(), webpPath));
        }
        if (doAvif) {
            await sharp(file).avif({ quality: 50 }).toFile(avifPath);
            console.log('wrote', path.relative(process.cwd(), avifPath));
        }
    } catch (err) {
        console.error('failed', file, err.message || err);
    }
}

async function main() {
    try {
        const files = await walk(IMAGE_DIR);
        const raster = files.filter(isRaster);
        console.log('Found', raster.length, 'raster images to process');

        for (const f of raster) {
            await optimize(f);
        }

        console.log('Done');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main();
