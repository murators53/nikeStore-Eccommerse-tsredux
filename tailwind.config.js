/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl':{'max': '1200px'},
      'lg':{'max': '991px'},
      'md':{'max': '767px'},
      'sm':{'max': '550px'},
      'xsm':{'max': '375px'},
    }
  },
  plugins: [],
}