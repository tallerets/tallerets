import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), preact()],
  i18n: {
    defaultLocale: 'ca',
    locales: ['es', 'ca'],
  },
})