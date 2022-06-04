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
      screens: {
        print: { raw: 'print' },
      },
      padding: {
        '0.25in': '0.25in',
        '0.5in': '0.5in',
      }
    },
  },
  variants: {
    margin: ['first'],
    extend: {},
  },
  plugins: [],
}
