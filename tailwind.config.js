
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      BeVietnamPro: "BeVietnamPro"
    },
    extend: {
      colors: {
        grey: "#e5e5dc",
        glass: "rgba(255,255,255,0.45)",
        transparentBlack : "rgba(0,0,0,0.7)"
      }
    },
   
  },
  plugins: [],
};