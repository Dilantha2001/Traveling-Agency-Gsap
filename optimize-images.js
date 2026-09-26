import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src/assets');
const files = fs.readdirSync(assetsDir);

const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

async function optimizeImages() {
  console.log('Optimizing images...');
  for (const file of imageFiles) {
    const filePath = path.join(assetsDir, file);
    const parsedPath = path.parse(filePath);
    const outputPath = path.join(assetsDir, `${parsedPath.name}.webp`);
    
    // Only optimize if webp doesn't exist already
    if (!fs.existsSync(outputPath)) {
      console.log(`Optimizing ${file}...`);
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true }) // Resize if larger than 1200px width
        .webp({ quality: 80 }) // Convert to webp with 80% quality
        .toFile(outputPath);
      
      // Optionally delete original to save space
      // fs.unlinkSync(filePath); 
      console.log(`Saved as ${parsedPath.name}.webp`);
    }
  }
  console.log('Done optimizing images.');
}

optimizeImages().catch(console.error);
