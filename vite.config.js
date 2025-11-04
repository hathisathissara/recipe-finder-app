import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    manifest: {
      name: 'Recipe Finder App',
      short_name: 'RecipeApp',
      description: 'Find recipes based on ingredients you have.',
      theme_color: '#ffffff',
      icons: [
        // Add your icons here
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.origin === 'https://api.spoonacular.com',
          handler: 'CacheFirst', // or 'StaleWhileRevalidate'
          options: {
            cacheName: 'spoonacular-api-cache',
            cacheableResponse: {
              statuses: [0, 200], // Cache successful responses
            },
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24, // 1 day
            },
          },
        },
      ],
    },
  }),
  ],
})
