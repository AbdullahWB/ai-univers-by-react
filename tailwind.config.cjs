/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#EB5757",

          "secondary": "#FEF6F6",

          "accent": "#6bea96",

          "neutral": "#18151E",

          "base-100": "#FFFFFF",

          "info": "#16A2F3",

          "success": "#2DBE7F",

          "warning": "#F4B848",

          "error": "#F55671",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
