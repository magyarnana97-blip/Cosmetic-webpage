// astro.config.mjs
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://szepsegterapeuta.hu',

  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare(),
});