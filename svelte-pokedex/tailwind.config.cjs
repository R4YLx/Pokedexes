/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        'pokedex-dark-red': '#AD0000',
        'pokedex-red': '#CC0000',
        'pokedex-blue': '#0076CA',
        'pokedex-light-blue': '#36B5FF'
      },
      fontFamily: {
        display: ['"Press Start 2P"', 'cursive']
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
