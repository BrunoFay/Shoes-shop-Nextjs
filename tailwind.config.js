/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        brand: '#f97316',
        brand2: '#4338ca',
      },
    },
  },
  plugins: [],
}
