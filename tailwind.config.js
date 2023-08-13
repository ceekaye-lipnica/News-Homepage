/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primaryYellow': 'hsl(35, 77%, 62%)',
        'primaryOrange': 'hsl(5, 85%, 63%)',
        'light': ' hsl(36, 100%, 99%)',
        'grayishBlue': 'hsl(233, 8%, 79%)',
        'darkGBlue': 'hsl(236, 13%, 42%)',
        'asul': ' hsl(240, 100%, 5%)',
        'blur':'rgba(0,0,0,.3);',
      },
      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      backgroundImage:{
        'mobile' : "url('./img/image-web-3-mobile.jpg')",
        'desktop' : "url('./img/image-web-3-desktop.jpg')",
      },
    },
  },
  plugins: [],
}