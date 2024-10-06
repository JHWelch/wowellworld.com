/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'wowpurp': '#8c52ff',
        'lavendar-haze': '#d3c2f5',
      },
      fontFamily: {
        'horizon': ['Horizon', 'sans-serif'],
        'horizon-outlined': ['Horizon Outlined', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
