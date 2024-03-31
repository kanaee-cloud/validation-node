/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Pixelify Sans',
      tertiary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        darkBg:"linear-gradient(rgba(30, 30, 32, 0.5),rgba(30, 30, 32, 0.5))"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}