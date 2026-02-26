const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'src', 'assets', 'BBBB.HEIC');
const outputPath = path.join(__dirname, 'src', 'assets', 'BBBB.jpg');

sharp(inputPath)
    .toFile(outputPath)
    .then(info => console.log('Conversion successful:', info))
    .catch(err => console.error('Conversion failed:', err));
