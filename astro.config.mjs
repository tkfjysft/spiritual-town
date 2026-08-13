// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        // URLに '/jp/' が含まれている場合
        if (item.url.includes('/jp/')) {
          // '/jp/' を空文字（削除）に置換して、ルート直下のURLに変換する
          // 例: https://spi-town.com/jp/oraclecards/draw/ -> https://spi-town.com/oraclecards/draw/
          item.url = item.url.replace('/jp/', '/');
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://spi-town.com', 
});