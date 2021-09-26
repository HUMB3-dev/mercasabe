module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
      screens: {
        '': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'mobile': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    extend: {
      colors: {
        redp: '#da4a54',
        bluep: '#4aafbc',
        yellowp: '#f28c00',
        yellows: '#ffd33c',
        grayp: '#e9e8e8',
        grays: '#f6f7f9'
      },
      width:{
        xrxr:'48%',
      },
      height:{
        h334:'334px',
        promoh:'90%',
      },
      fontFamily: {
        'roboto':['Roboto', 'sans-serif'],
        'robotoc':['Roboto Condensed', 'sans-serif'],
        'montserrat':['Montserrat', 'sans-serif']
      
      },
      border:{
        
      },
      
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
