/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pokedex-dark-red': '#AD0000',
        'pokedex-red': '#CC0000',
        'pokedex-blue': '#0076CA',
        'pokedex-light-blue': '#36B5FF'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
