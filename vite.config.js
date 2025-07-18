import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // ← Esto arregla las rutas para producción en Netlify
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        book: resolve(__dirname, 'book.html'),
        services: resolve(__dirname, 'services.html'),
        aboutme: resolve(__dirname, 'aboutme.html'),
      }
    }
  },
  publicDir: 'public'
});
