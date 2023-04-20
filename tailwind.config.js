const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            primary: "#4C8577",
        },
        fontFamily: {
            sans: ["Roboto", ...defaultTheme.fontFamily.sans]
        }
    },
  },
  plugins: [],
}
