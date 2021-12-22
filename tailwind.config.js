module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        spotify:'#1ed760',
      },
      // minHeight:{
      //   '37.5':'37.5rem',
      // },
      height:{
        '35.813':'35.813rem',
        '37.5':'37.5rem',
        '35.938':'35.938rem',
        '27.813':'27.813rem',
        '90':'90vh',
      },
      width:{
        '17.875':'17.875rem',
         '16.688':'16.688rem'
      },
      borderRadius: {
        '31.25':'31.25rem'
       },
       borderWidth:{
         '1':'1px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}