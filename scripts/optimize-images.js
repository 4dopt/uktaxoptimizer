
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, '../public/assets/images');

if (!fs.existsSync(directory)) {
    console.error(`Directory not found: ${directory}`);
    process.exit(1);
}

fs.readdir(directory, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

    console.log(`Found ${pngFiles.length} PNG files.`);

    pngFiles.forEach(file => {
        const filePath = path.join(directory, file);
        const outputFilename = path.parse(file).name + '.webp';
        const outputPath = path.join(directory, outputFilename);

        sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(info => {
                const originalStats = fs.statSync(filePath);
                const savings = originalStats.size - info.size;
                const percent = (savings / originalStats.size * 100).toFixed(1);

                console.log(`Converted ${file}:`);
                console.log(`  ${(originalStats.size / 1024).toFixed(1)}KB -> ${(info.size / 1024).toFixed(1)}KB (${percent}% saved)`);
            })
            .catch(err => {
                console.error(`Error converting ${file}:`, err);
            });
    });
});
