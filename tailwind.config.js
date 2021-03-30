module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.jsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#03072a'
      },
      fontFamily:{
        PoiretOne: ['Poiret One']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
