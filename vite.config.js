import {URL, fileURLToPath} from 'node:url';

import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

const vitePWA = VitePWA({
  registerType: 'autoUpdate',

  outDir: 'dist',

  manifest: {
    name: '#TaskList',
    short_name: '#TaskList',
    description: 'Simple and fast task manager',
    theme_color: '#181818',
    display: 'standalone',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vue-todo.v2/',
  plugins: [vue(), vueDevTools(), vitePWA],
  server: {
    port: 5123,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
