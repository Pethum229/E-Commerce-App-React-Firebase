/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color-01': '#ffd9d9',
      },
      dropShadow: {
        'custom-shadow-01': '0 5px 15px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}