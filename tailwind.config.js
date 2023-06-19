/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      monoton: ["Monoton", "Cursive"],
    },
    extend: {
      animation: {
        aurora: "aurora 10s ease-in infinite",
        marquee: "marquee 10s linear infinite;",
      },
    },
  },
  plugins: [],
};
