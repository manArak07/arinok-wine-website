/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xl': { 'max': '1200px' },
      'lg': { 'max': '900px' },
      'md': { 'max': '730px' },
      'sm': { 'max': '600px' },
      'st': { 'max': '450px'},
      'xs': { 'max': '400px' },
    },
    extend: {
      colors: {
        lGrey: '#a39a9a',
        lPink: '#e3b4b4',
        cream: '#e7d5b2',
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}