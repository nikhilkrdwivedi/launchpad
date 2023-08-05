/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'node:path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // extensions: ['.js', '.jsx', '.scss', '.less'],
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@pages': path.resolve(__dirname, './src/pages')
      // '@assets': '/src/assets',
      // '@components': '/src/components',
      // '@contexts': '/src/contexts',
      // '@pages': '/src/pages'

    }
  },
  plugins: [react()],
})
