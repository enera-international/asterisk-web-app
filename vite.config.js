import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  sourcemap: true,
  alias: {
    '@mui/material': path.resolve(__dirname, '../../../node_modules/@mui/material'),
    '@mui/icons-material': path.resolve(__dirname, '../../../node_modules/@mui/icons-material'),
  }
})
