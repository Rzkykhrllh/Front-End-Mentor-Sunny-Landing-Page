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
        dark_blue: "#19536b",
        dark_moderate: "#262A36",
        lightblue: "#3EBEFF",
        white_transparent :  "#ffffff40",
        mywhite:"#FFFBF8"
      },
      height:{
        half_screen: "50vh"
      },
      width:{
        "60%" : "60%",
        "80%" : "90%",
      },
      top:{
        "60%" : "60%",
        "63%" : "63%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
