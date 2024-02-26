import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['react.svg'],
      manifest: {
        name: 'Vite PWA',
        short_name: 'Vite PWA',
        theme_color: '#000000',
        icons: [
          {
            src: 'vite.svg',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'vite.svg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'vite.svg',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'viteMaskable.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});
