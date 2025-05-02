module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#299CA2',
      primaryHover: '#2eb0b6',
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        bitter: ["Bitter", "serif"],
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
  plugins: [],
}
