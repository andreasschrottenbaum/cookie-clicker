
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});