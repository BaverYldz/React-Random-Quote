/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        edu: ['Edu TAS Beginner', 'cursive'],
        danc: [ 'Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}