/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink:'rgba(255, 127, 125, 1)',
        colorAddToCard: 'rgba(255, 127, 125, 1)',
        footerBackground: 'rgba(42, 42, 42, 1)',
      }
    },
  },
  plugins: [],
}

