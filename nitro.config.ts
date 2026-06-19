import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  preset: 'netlify',
  output: { dir: 'dist/server' },
})
