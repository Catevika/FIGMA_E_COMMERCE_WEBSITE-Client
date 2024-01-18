import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    proxy: {
      './': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  plugins: [ react() ]
});
