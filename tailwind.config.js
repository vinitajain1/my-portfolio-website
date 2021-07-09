module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      violet: {
        primary: '#BB86FC',
        secondary: '#742a2a',
        iconHover:"BB86FC"
      },
      gray:{
        primary:"#121212",
        grayText:"#808080",
        expBackground:"#333333"
      },
      pink:{
        text:"#ffffff",
        textHover:"#ffffff"
      },
      green:{
        "400":"#065F46"
      },
      black: '#000',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}