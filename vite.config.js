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
      '@pages': path.resolve(__dirname, './src/pages'),
      '@elements': path.resolve(__dirname, './src/elements'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@environment': path.resolve(__dirname, './src/environment'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@routes': path.resolve(__dirname, './src/routes'),
      // '@hooks': path.resolve(__dirname, './src/hooks'),
      // '@assets': '/src/assets',
      // '@components': '/src/components',
      // '@contexts': '/src/contexts',
      // '@pages': '/src/pages'

    }
  },
  plugins: [react()],
})
