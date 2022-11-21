const themes = require("./src/themes/index");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: ["dark"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{ ...themes }],
  },
};
