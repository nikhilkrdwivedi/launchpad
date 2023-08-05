import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // extensions: ['.js', '.jsx', '.scss', '.less'],
    alias: {
      '@assets': path.resolve(dirname + '/src/assets'),
      '@components': path.resolve(dirname + '/src/components'),
      '@contexts': path.resolve(dirname + '/src/contexts'),
      '@pages': path.resolve(dirname + '/src/pages')
      // '@assets': '/src/assets',
      // '@components': '/src/components',
      // '@contexts': '/src/contexts',
      // '@pages': '/src/pages'

    }
  },
})
