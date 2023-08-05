import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // extensions: ['.js', '.jsx', '.scss', '.less'],
    alias: {
      // '@assets': path.resolve(__dirname, '/src/assets'),
      // '@components': path.resolve(__dirname, '/src/components'),
      // '@contexts': path.resolve(__dirname, '/src/contexts'),
      // '@pages': path.resolve(__dirname, '/src/pages')
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@pages': '/src/pages'
    }
  },
})
