module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      purple: {
        light: "#d1c4e9",
      },
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
