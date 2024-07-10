/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        'custom': '200px',
        'custom': '450px',
        // Add more custom widths as needed
      },
      colors: {
        customPink:'rgba(255, 127, 125, 1)',
        colorAddToCard: 'rgba(255, 127, 125, 1)',
        footerBackground: 'rgba(42, 42, 42, 1)',
        shopItem: 'rgba(237, 237, 237, 0.67)',
        borderColor: 'rgba(42, 42, 42, 0.4)',
        paymentBg: 'rgba(42, 42, 42, 1)',
        paymentBorder: 'rgba(250, 250, 250, 0.5)',
        footerColor: 'rgba(250, 250, 250, 0.8)',
        paymentMobileBorder: 'rgba(151, 151, 151, 1)',
      }
    },
  },
  plugins: [],
}

