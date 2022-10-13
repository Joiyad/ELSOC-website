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
        bgFront: "url('/public/1876.jpg')",
        bgImage: "url('https://t3.ftcdn.net/jpg/02/10/99/46/240_F_210994630_0XfHNFjjMn1ocaQ8feaEJvWpr7UpuZFk.jpg')"
      }
    },
  },
  plugins: [],
}
