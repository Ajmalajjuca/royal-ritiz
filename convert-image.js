// convert-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets";
const outputDir = "./src/optimized-assets";

function convertImages(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  fs.readdirSync(srcDir).forEach((file) => {
    const inputPath = path.join(srcDir, file);
    const outputPath = path.join(destDir, file);

    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      convertImages(inputPath, outputPath); // recurse
    } else {
      const ext = path.extname(file).toLowerCase();

      // Skip .webp and non-image files
      if ([".webp", ".svg", ".gif"].includes(ext)) {
        console.log(`Skipping ${file}`);
        return;
      }

      const newFileName = path.basename(file, ext) + ".webp";
      const newFilePath = path.join(destDir, newFileName);

      sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true }) // adjust width as needed
        .webp({ quality: 75 })
        .toFile(newFilePath)
        .then(() => console.log(`✅ Converted: ${file} → ${newFileName}`))
        .catch((err) => console.error(`❌ Error converting ${file}:`, err));
    }
  });
}

convertImages(inputDir, outputDir);
