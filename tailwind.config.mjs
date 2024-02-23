/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      soft: '#FFFBEC',
      dark: '#1a1a1a',
      red: '#D60000',
    },
    fontFamily: {
      serif: ['Noto Serif Variable', ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
}
