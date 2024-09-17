/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'my-cursive': ['"Your Cursive Font"', 'cursive'],
      },
      colors: {
          'custom-blue': '#1A365D',        
          'secundario': '#2A9D8F',         
          'custom-light-blue': '#F9F7F3',  
      },
    },
  },
  plugins: [],
}
