import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read SVG file
const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/logo-icon.svg'));

// Generate PNG sizes
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 }
];

async function generateFavicons() {
  for (const { name, size } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, '../public', name));
    console.log(`✓ Generated ${name}`);
  }
  console.log('\n✅ All favicons generated!');
}

generateFavicons().catch(console.error);
