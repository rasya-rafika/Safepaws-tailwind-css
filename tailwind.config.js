/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      colors:{
        primary: '#083344',
        dark: '#134e4a',
        secondary: '#64748b'
      },
      screens:{
        '2xl':'1320px',
      } 
    },
  },
  plugins: [],
}

