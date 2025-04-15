/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./css/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3DA2EA',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
