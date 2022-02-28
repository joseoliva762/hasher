module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hasher-blue': '#0070f3',
        'hasher-gray': '#bbbbbb'
      },
      maxWidth: {
        'hasher-elipsis': '240px',
      }
    },
  },
  plugins: [],
}
