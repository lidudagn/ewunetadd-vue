/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/landing_bg.svg')",
      },
      colors:{
        'one':'#c08d59',
        'two':'#75491d'
      },
    
      fontFamily: {
        'poppins': ['Poppins'],
        
     } 
    },
  },
  plugins: [],
}
