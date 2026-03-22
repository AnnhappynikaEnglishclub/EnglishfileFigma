import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 👇 ОБЯЗАТЕЛЬНО для GitHub Pages
  base: '/EnglishfileFigma/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Поддержка raw-импортов
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
