import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        host: 'local.lara-10.com',
        proxy: {
            '/api': {
                target: 'http://local.lara-10.com',
                changeOrigin: true,
            },
        },
    }
});
