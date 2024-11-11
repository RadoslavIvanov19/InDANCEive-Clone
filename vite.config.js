import { defineConfig } from 'vite';

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
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    }
}) 
