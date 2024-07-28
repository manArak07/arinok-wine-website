/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        purple: '#c39696',
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}