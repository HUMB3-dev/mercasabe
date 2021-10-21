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
      gridTemplateRows: {
        
       '9': 'repeat(9, minmax(0, 1fr))',

        // Complex site-specific row configuration
       'layout': '200px minmax(900px, 1fr) 100px',
      },
      margin: {
        'header': '180px',
        'mlogo': '93px',
        'navlinks': '26px',
        'navlinks': '26px',
        '30': '1.875rem',
        '38':'2.375rem',
        '5px':'0.3125rem',
        '22px':'21px',
        '13px':'0.8125rem',
        '6px':'0.375rem',
        '19px':'1.1875rem',
        '7px':'0.4375rem',
        '125px':'125px',
        '17px':'17px',
        '14px':'14px',
        '46px':'46px',
        '25px':'25px',
        '11px':'11px',
        '3px':'3px',
        '2px':'2px',
        '2px':'2px',
        '50px':'50px',
        

},
padding: {
  px14: '14px',
  px19: '19px',
  px25: '25px',
  px22: '22px',
  px10: '10px',
  px7:'0.4375rem',
  px13: '13px',
  px9: '9px',
  px57: '57px',
  px18: '18px',
  px8: '8px',

 },
 
      colors: {
        redp: '#da4a54',
        bluep: '#4aafbc',
        bluec1:'#00386c',
        yellowp: '#f28c00',
        yellows: '#ffd33c',
        grayp: '#e9e8e8',
        oftl: '#f2f2f2',
        ogroffer:'#e54d04',
        body:'#ffcf00',
        prbgray:'#d2d2d2',
        prfonth1:'#959595',
        prvm:'#595959',
        prllh1:'#c23d02',
        searchb:'#f9f9f9',
        offers:'#00386c',
        bordersearchb:'#b9b9b9',
        borderlinks:'#dfdfe1',
        textunetehoy:'#ffe400',
        offeryellow:'#ffce0c',
        ahorras:'#ff0101',
        precioenoferta:'#b2010d',
        textsmofferweek:'#494949',
        circleoffer:'#fc1323',
        firsttextred:'#dc3545',
        privacidadtext:'#8e8e8e',
        textindicatorpage:'#666666',
        navlinksinfo:'#f4f4f4',
        navlinksinfoborder:'#d8d8d8',
        navlinksinfoborder1:'#a8a8a8'
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
        px79:'79px',
        px410:'410px',

      },
      minWidth: {
        '410px': '410px',
        '100px': '100px',
        
       },
       maxWidth: {
        '410px': '410px',
        
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
        px133:'133px',
        px1587:'1587px',
        px79:'79px',
        px90:'90px',
        px25:'25px',
        px50:'50px',
        px496:'496px',
        
      },
      fontFamily: {
        'roboto':['Roboto', 'sans-serif'],
        'robotoc':['Roboto Condensed', 'sans-serif'],
        'montserrat':['Montserrat', 'sans-serif'],
        'opensans':['Open Sans', 'sans-serif']
        
        
      
      },
      borderWidth: {
        '10px': '10px',
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
        '10.83':'10.83333px',
        '13.33':'13.33333px',
        '14.16':'14.16667px',
        '33.33':'33.33px',
        '13.75':'13.75px',
        '16.66':'16.66667px',
        '41.66px':'41.66667px',
        '15.83px':'15.83333px',
        
        

        
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
