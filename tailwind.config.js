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
        shopItem: 'rgba(237, 237, 237, 0.67)',
        borderColor: 'rgba(42, 42, 42, 0.4)',
        paymentBg: 'rgba(42, 42, 42, 1)',
        paymentBorder: 'rgba(250, 250, 250, 0.5)'
      }
    },
  },
  plugins: [],
}

