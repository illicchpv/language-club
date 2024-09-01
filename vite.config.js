import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

import {VitePWA} from 'vite-plugin-pwa';
const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    "short_name": "language club",
    "name": "language Club",
    "description": "учебный проект 'language club'",
    "orientation": "portrait",
    "display": "standalone",
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "lang": "ru",
    "start_url": "/",
    "scope": "/",
    icons: [
      {
        "src": "./icons/logo192.png",
        "sizes": "192x192",
        "type": "image/png",
      },
      {
        "src": "./icons/logo512.png",
        "sizes": "512x512",
        "type": "image/png",
      },
    ],
    "screenshots": [
      {

        "src": "./img/398x783.png",
        "sizes": "398x783",
        "type": "image/png",
        "form_factor": "wide",
      },
    ],
    // "shortcuts": [
    //   {
    //     "name": "To do list",
    //     "short_name": "ToDo",
    //     "description": "Список дел",
    //     "url": "/todo-pwa-ts-vite",
    //     // "icons": [{ "src": "/images/today.png", "sizes": "192x192" }]
    //   },
    // ],    
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,woff,woff2,txt}'],
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePWA,
  ],
});
