import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from './build/prerender.js'

export default defineConfig({
  plugins: [react(), prerender()],
  build: { target: 'es2020' },
})
