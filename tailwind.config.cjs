/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'azul': '#051e3b',
        'azul-900': '#03152b',
      },
    },
  },
  plugins: [],
};
