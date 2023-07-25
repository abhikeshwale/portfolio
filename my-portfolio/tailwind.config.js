/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        pacifico: ["Damion", "cursive"],
      },
      backgroundImage: {
        bg: "url(./assets/Wallpaper-Emerald-Green.jpg)",
        footer: "url(./assets/footer_image.jpg)"
        
      },
    },
    height: {
      "5v": "5vh",
      "10v": "10vh",
      "50v": "50vh",
      "100v": "100vh",
      "90v": "90vh",
      "80v": "80vh",
      1089: "1089px",
    },
    flex: {
      10: "10",
    },
    transform: {
      "transform-img": "translate3d(-50%, -14.8536px, 0px)",
    },
  },
  plugins: [],
};