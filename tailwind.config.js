/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'monoton': ['Monoton', 'Cursive'],
    },
    extend: {
      animation: {
        aurora: 'aurora 7s ease-in infinite',
      }
    },
  },
  plugins: [],
  
}