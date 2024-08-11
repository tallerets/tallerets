/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      soft: '#FEFAE9',
      dark: '#1a1a1a',
      red: '#A22400',
    },
    fontFamily: {
      serif: [
        'Clash Display',
        'Adjusted Arial Fallback',
        ...defaultTheme.fontFamily.serif,
      ],
      sans: ['Helvetica', ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
}
