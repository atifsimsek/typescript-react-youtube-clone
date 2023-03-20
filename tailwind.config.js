/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgNav: "#545353",
        border: "#3F3F3F"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
