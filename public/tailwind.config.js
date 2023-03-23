/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,ejs}"],
  theme: {
    screens: {
      'mobile': { 'max': '720px' },
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
    },
    variants: {
      animation: ["motion-safe"]
    },
  },
  plugins: [],
}
