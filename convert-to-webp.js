const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = './public/images'; // مسیر پوشه‌ی عکسهات
const outputFolder = './public/images-webp'; // مسیر خروجی عکس‌های webp

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
  const inputFile = path.join(inputFolder, file);
  const outputFile = path.join(outputFolder, file.split('.').slice(0, -1).join('.') + '.webp');

  sharp(inputFile)
    .webp({ quality: 80 }) // کیفیت خروجی، میتونی تغییر بدی
    .toFile(outputFile)
    .then(() => console.log(`Converted: ${file}`))
    .catch(err => console.error(`Error converting ${file}:`, err));
});
