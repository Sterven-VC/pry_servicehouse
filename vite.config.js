import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from './build/prerender.js'
import { seo } from './build/seo.js'

export default defineConfig({
  plugins: [react(), prerender(), seo()],
  build: { target: 'es2020', assetsInlineLimit: 0 },
})
