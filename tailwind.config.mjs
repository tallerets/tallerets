/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      soft: '#F4EEED',
      dark: '#0D33AB',
      red: '#B40B19',
    },
    fontFamily: {
      serif: [
        'DM Sans',
        'Adjusted Arial Fallback',
        ...defaultTheme.fontFamily.serif,
      ],
      sans: ['DM Sans', ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
}
