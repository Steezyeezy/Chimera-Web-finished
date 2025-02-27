import { readdir, unlink } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const usedImages = [
  'herophoto.webp',
  '2whychoose.webp',
  '2aboutus.webp',
  '1ourservices.webp',
  '2ourservices.webp'
];

const imagesDir = join(dirname(__dirname), 'public', 'images');

try {
  const files = await readdir(imagesDir);
  
  for (const file of files) {
    if (!usedImages.includes(file)) {
      const filePath = join(imagesDir, file);
      await unlink(filePath);
      console.log(`Deleted: ${file}`);
    }
  }
  
  console.log('Cleanup complete!');
} catch (error) {
  console.error('Error during cleanup:', error);
}