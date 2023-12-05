/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        'azulClaro': {
          '50': '#f3f7fc',
          '100': '#e6eff8',
          '200': '#c7ddf0',
          '300': '#97c1e2',
          '400': '#5fa0d1',
          '500': '#367bb0',
          '600': '#2a699f',
          '700': '#235481',
          '800': '#20486c',
          '900': '#203e5a',
          '950': '#15273c',
      },
      }
    },
  },
  plugins: [],
}

