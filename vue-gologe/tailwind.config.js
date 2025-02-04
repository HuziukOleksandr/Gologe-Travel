/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        ph: { min: "360px", max: "480px" },
        sm: { min: "360px", max: "767px" },
        sq: { min: "767px", max: "1024px"},
        md: { min: "768px", max: "1365px" },
        lg: { min: "1366px" },
      },
      maxWidth: {
        'large-width': '1440px',
        'primary-width': '1230px',
        'secondary-width': '1380px'
      },
      colors: {
        'default': '#FFFFFF',                 //default
        'custom-lightgreen': '#8DD3BB',     //buttonGreen
        'custom-darkgreen': '#112211',      //green
        'custom-darkgray': '#79747E',       //gray
        'custom-red': '#FF8682',            //red
        'custom-lightgray': '#D7E2EE',      //lightGray
        'custom-green': '#CDEAE1'           //mintGreen
      },
      fontFamily: {
        serrat: ["Montserrat", "sans"],
      },
    },
  },
  plugins: [],
};
