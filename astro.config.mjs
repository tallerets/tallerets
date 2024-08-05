import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale: 'ca',
    locales: ['es', 'ca'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
})
