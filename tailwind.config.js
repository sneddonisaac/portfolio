module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi-regular': "'Satoshi Regular', sans-serif",
        'satoshi-bold': "'Satoshi Bold', sans-serif",
      },
      colors: {
        black: '#28292e',
        white: '#fdffff',
      }
    },
  },
  plugins: [],
}
