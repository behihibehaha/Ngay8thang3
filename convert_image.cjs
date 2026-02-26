const fs = require('fs').promises;
const convert = require('heic-convert');
const path = require('path');

async function convertHeic() {
    try {
        const inputBuffer = await fs.readFile(path.join(__dirname, 'src', 'assets', 'BBBB.HEIC'));

        // Convert to PNG for lossless quality
        const outputBuffer = await convert({
            buffer: inputBuffer,
            format: 'PNG'
        });

        await fs.writeFile(path.join(__dirname, 'src', 'assets', 'BBBB.png'), outputBuffer);
        console.log('Conversion successful: BBBB.png created (lossless PNG)');
    } catch (err) {
        console.error('Conversion failed:', err);
    }
}

convertHeic();
