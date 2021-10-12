module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      purple: {
        light: "#d1c4e9",
      },
      white: "#ffffff",
      gray: {
        light: "#CFD8DC",
        medium: "#78909C",
      }
    },
    extend: {},
    fontFamily: {
      'nunito': ['nunito', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
