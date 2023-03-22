/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0F0F0F",
        bgNav: "#272727",
        border: "#3F3F3F"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
