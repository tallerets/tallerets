/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      soft: '#FFFBEC',
      dark: '#1a1a1a',
      red: '#D60000',
    },
    fontFamily: {
      serif:
        'Noto Serif, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
  },
  plugins: [],
}
