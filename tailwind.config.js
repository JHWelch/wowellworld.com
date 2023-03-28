/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
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
