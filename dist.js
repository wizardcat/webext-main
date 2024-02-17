/* eslint-disable @typescript-eslint/no-var-requires */
// create dist directory for static Chrome Extension

const fs = require('fs');
const glob = require('glob');

const files = glob.sync('dist/**/*.{html,js}');

console.log('Rename path "/_next/" to "/next/" in "html,js" files.');

files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const modifiedContent = content.replace(/\/_next/g, '/next');
  fs.writeFileSync(file, modifiedContent, 'utf-8');
});

console.log('Path "/_next/" has been renamed successfully.');

const sourcePath = 'dist/_next';
const destinationPath = 'dist/next';

fs.rename(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Failed to rename "_next" directory to "next".', err);
  } else {
    console.log('Renamed "_next" directory to "next" successfully.');
  }
});
