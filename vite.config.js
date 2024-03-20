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
        base: 'https://ef11a82c.frontendhw.pages.dev',
        optimizeDeps: {
            include: ['react','react-dom'],
        },
    },
});

