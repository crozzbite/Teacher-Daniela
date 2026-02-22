/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1E3A8A',
        'brand-lightblue': '#DBEAFE',
        'brand-black': '#0F0F0F',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
