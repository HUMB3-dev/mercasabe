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
      margin: {
        'header': '180px',
        'mlogo': '93px',
        'navlinks': '26px',
        'navlinks': '26px',
        '30': '1.875rem',
        '38':'2.375rem',
        '5px':'0.3125rem',
        '22px':'1.375rem',
        '13px':'0.8125rem',
        '6px':'0.375rem',
        '19px':'1.1875rem',
        '7px':'0.4375rem',
        '125px':'125px',
        '17px':'17px',
        '14px':'14px',
        

},
padding: {
  px14: '14px',
  px19: '19px',
  px25: '25px',
  px22: '22px',
  px10: '10px',
  px7:'0.4375rem',
 },
 
      colors: {
        redp: '#da4a54',
        bluep: '#4aafbc',
        bluec1:'#00386c',
        yellowp: '#f28c00',
        yellows: '#ffd33c',
        grayp: '#e9e8e8',
        grays: '#f6f7f9',
        ogroffer:'#e54d04',
        body:'#ffcf00'
      },
      width:{
        xrxr:'48%',
        search:'474px',
        mlogo: '93px',
        w428px:'425px',
        offerw:'132px',
        px34:'34px',
        px497:'497px',
        px582:'582px',
        px319:'319px',
        px166:'166px',
        px1240:'1240px',

      },
      height:{
        h334:'334px',
        promoh:'90%',
        header:'180px',
        clogo:'106px',
        navlinks:'42px',
        search:'34px',
        c1:'581px',
        offerh:'137px',
        px45:'45px',
        px54:'54px',
        px91:'91.33px',
        px368:'368px',
        px52:'52px',
        px316:'316px',
        px58:'58px',
        px260:'260px',
        px243:'243px',
        px17:'17px',
        px142:'142px',
        px35:'35px',
        px34:'34px',
        px386:'386px',
        
      },
      fontFamily: {
        'roboto':['Roboto', 'sans-serif'],
        'robotoc':['Roboto Condensed', 'sans-serif'],
        'montserrat':['Montserrat', 'sans-serif'],
        'opensans':['Open Sans', 'sans-serif']
        
        
      
      },
      border:{
        
      },
      fontSize: {
        '37.5px': '37.5px',
        '32px': '2.083333125rem',
        '12.5px': '0.78125rem',
        '10.41px': '0.650625rem',
        '20.83px': '1.302083125rem',
        '25px': '1.5625rem',
        '15px': '0.9375rem',
        '20px': '20px',

        
       },
       gap: {
        '30px': '1.875rem',
        '19px': '1.1875rem',
        '10px': '10px',
        
       }
      
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
