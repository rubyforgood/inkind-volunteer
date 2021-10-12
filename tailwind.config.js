module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    boxShadow: {
       md: "0 20px 20px -1px rgba(120, 144, 156, .5), 0 2px 20px -1px rgba(120, 144, 156, .5)",
    },
    extend: {
      colors: {
        'neutral': '#ECEFF1',
        'purple': '#673AB7',
        'purple-light': '#EDE7F6',
        'gray-lightest': '#F8FBFE',
        'gray-light':  '#CFD8DC',
        'gray-medium': '#B0BEC5',
        'gray-dark': '#37474F',
      },
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
