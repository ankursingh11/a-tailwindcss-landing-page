
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary : '#3238f2',
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif'],
        'inter' : ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}