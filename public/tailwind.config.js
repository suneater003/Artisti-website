/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,ejs}"],
  theme: {
    screens: {
      'mobile': { 'max': '1300px' },
      'mini': {'max': '670px'}
    },
  },
  plugins: [],
}
