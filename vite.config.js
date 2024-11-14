import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    server: {
        host: true
    },
    root: 'src',
    input: {
        main: 'src/index.html',
        archive: 'src/archive.html',
        volumeOne: 'src/archive/2024/indanceive-vol-1.html',
    },
    plugins: [
        ViteImageOptimizer({
            jpg: {
                quality: 80,
              }
        }),
    ],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
              main: 'src/index.html',
              archive: 'src/archive.html',
              volumeOne: 'src/archive/2024/indanceive-vol-1.html',
            },
          },
    }
}) 
