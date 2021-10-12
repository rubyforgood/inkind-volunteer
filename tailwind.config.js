module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    boxShadow: {
       md: "0 20px 20px -1px rgba(120, 144, 156, .5), 0 2px 20px -1px rgba(120, 144, 156, .5)",
    },
    extend: {
      colors: {
        'purple-light': '#EDE7F6',
        'gray-lightest': '#F8FBFE',
        'gray-light':  '#CFD8DC',
        'gray-medium': '#B0BEC5',
        'gray-dark': '#37474F',
        primary: {
          DEFAULT: '#673ab7',
          '50': '#ede7f6',
          '100': '#d1c4e9',
          '200': '#b39ddb',
          '300': '#9575cd',
          '400': '#7e57c2',
          '500': '#673ab7',
          '600': '#5e35b1',
          '700': '#512da8',
          '800': '#4527a0',
          '900': '#311b92',
        },
        secondary: {
          DEFAULT: '#00bcd4',
          '50': '#e0f7fa',
          '100': '#b2ebf2',
          '200': '#80deea',
          '300': '#4dd0e1',
          '400': '#26c6da',
          '500': '#00bcd4',
          '600': '#00acc1',
          '700': '#0097a7',
          '800': '#00838f',
          '900': '#006064',
        },
        neutral: {
          DEFAULT: '#607d8b',
          '50': '#eceff1',
          '100': '#cfd8dc',
          '200': '#b0bec5',
          '300': '#9a44ae',
          '400': '#78909c',
          '500': '#607d8b',
          '600': '#546e7a',
          '700': '#455a64',
          '800': '#37474f',
          '900': '#263238',
        },        
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
