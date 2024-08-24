/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue: '#14147d',
        secondaryBlue: '#264a6e',
        darkGrey: '#191a1a',
        lightGreyBlue: '#67717f',
        headerBlue: '#14147d',
        buttonBlue: '#050f3c',
      }
     },
  },
  plugins: [],
}