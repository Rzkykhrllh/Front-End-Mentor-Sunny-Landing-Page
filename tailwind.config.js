const colors = require( 'tailwindcss/colors' )

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        soft_red: "#fe7867",
        yellow: "#fad400",
        dark_desaturated: "#25564b",
        Dark_blue: "#19536b",
        Dark_moderate: "#458c7e",
        lightblue: "#3EBEFF",
        white_transparent :  "#ffffff40"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
