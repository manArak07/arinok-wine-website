/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
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