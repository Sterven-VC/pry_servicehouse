import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from './build/prerender.js'
import { seo } from './build/seo.js'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react(), prerender(), seo()],
  build: {
    target: 'es2020', assetsInlineLimit: 0,
    rollupOptions: { input: {
      main: fileURLToPath(new URL('./index.html', import.meta.url)),
      avisoLegal: fileURLToPath(new URL('./aviso-legal/index.html', import.meta.url)),
      privacidad: fileURLToPath(new URL('./politica-de-privacidad/index.html', import.meta.url)),
      cookies: fileURLToPath(new URL('./politica-de-cookies/index.html', import.meta.url)),
      terminos: fileURLToPath(new URL('./terminos-y-condiciones/index.html', import.meta.url)),
    } },
  },
})
