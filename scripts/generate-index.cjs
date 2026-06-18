const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, '..', 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

if (!fs.existsSync(clientDir)) {
  console.error('Client directory not found:', clientDir);
  process.exit(1);
}

let scripts = [];
let styles = [];

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const indexFiles = files.filter((f) => /^index-.*\.js$/.test(f));
  if (indexFiles.length > 0) {
    indexFiles.sort((a, b) => {
      const sa = fs.statSync(path.join(assetsDir, a)).size;
      const sb = fs.statSync(path.join(assetsDir, b)).size;
      return sb - sa;
    });
    scripts.push(`/assets/${indexFiles[0]}`);
  }

  const otherJs = files.filter((f) => /-.*\.js$/.test(f) && !/^index-.*\.js$/.test(f));
  otherJs.forEach((f) => scripts.push(`/assets/${f}`));

  const cssFiles = files.filter((f) => /\.css$/.test(f));
  cssFiles.forEach((f) => styles.push(`/assets/${f}`));
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Site</title>
    ${styles.map((s) => `<link rel="stylesheet" href="${s}">`).join('\n    ')}
  </head>
  <body>
    <div id="root"></div>
    ${scripts.map((s) => `<script type="module" src="${s}"></script>`).join('\n    ')}
  </body>
</html>`;

fs.writeFileSync(path.join(clientDir, 'index.html'), html, 'utf8');
console.log('Wrote', path.join(clientDir, 'index.html'));
