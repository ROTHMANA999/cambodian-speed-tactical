const fs = require('fs')
const path = require('path')

const filesToRemove = [
  path.join(__dirname, '..', 'dist', 'client', 'wrangler.json'),
]

for (const file of filesToRemove) {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file)
      console.log('Removed', file)
    }
  } catch (e) {
    console.error('Failed to remove', file, e)
  }
}

// Also remove any top-level wrangler.json that may be copied
try {
  const top = path.join(__dirname, '..', 'wrangler.json')
  if (fs.existsSync(top)) {
    fs.unlinkSync(top)
    console.log('Removed', top)
  }
} catch (e) {
  console.error('Failed to remove top-level wrangler.json', e)
}
