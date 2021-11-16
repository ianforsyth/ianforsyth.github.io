module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#299CA2',
      primaryHover: '#2eb0b6',
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "cursive"],
        bitter: ["Bitter", "cursive"],
      },
    },
  },
  variants: {
    margin: ['first'],
    extend: {},
  },
  plugins: [],
}
