/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        exo:"'Exo 2', sans-serif",
        k2d:"'K2D', sans-serif",
      },
      backgroundImage:{
        front: "url('/public/1876.jpg)",
      }
    },
  },
  plugins: [],
}
