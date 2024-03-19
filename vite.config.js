import { defineConfig } from 'vite';
import cssnano from 'cssnano';
import imagemin from 'vite-plugin-imagemin';


export default defineConfig({
    build: {
        minify: 'terser',
        plugins: [
            cssnano(),
            imagemin(),
        ],
        base: 'https://localhost:63342',
        optimizeDeps: {
            include: ['react','react-dom'],
        },
    },
});

