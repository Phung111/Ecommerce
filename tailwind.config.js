/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        default: "#fff",
        primary: "#FF8A00",
        primary_dark: "#E37900",
        white_dark: "#EFEFEF",
        secondary: "#5ed1c9",
        secondary_dark: "#40AEA7",
        neutral: "#fff",
        blue: "#1470CC",
        blue_light: "#eff5fa",
        red: "#E64545",
        gray: "#5B6171",
      },
    },
  },
  plugins: [],
};
