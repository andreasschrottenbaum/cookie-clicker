
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [], // füge hier deine Plugins hinzu, wenn du welche hast
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: 'index.js', // Legt den Namen der Haupt-JavaScript-Datei fest
        chunkFileNames: '[name].js', // Benenne die Chunk-Dateien
        assetFileNames: '[name].[ext]', // Benenne die anderen Assets
      },
    },
  },
});