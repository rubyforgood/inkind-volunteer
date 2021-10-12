module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    boxShadow: {
       md: "0 20px 20px -1px rgba(120, 144, 156, .5), 0 2px 20px -1px rgba(120, 144, 156, .5)",
    },
    colors: {
      purple: {
        light: "#d1c4e9",
      },
      white: "#ffffff",
      gray: {
        lightest: "#F8FBFE",
        light: "#CFD8DC",
        medium: "#B0BEC5",
        dark: "#37474F"
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
