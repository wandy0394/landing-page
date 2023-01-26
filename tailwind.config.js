/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html, js}"],
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        brightRed: 'hsl(12, 88%, 60%)',
        brightRedLight: 'hsl(12, 88%, 70%)',
        bridRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 40%, 25%)',
        darkGreyBlue:'hsl(228, 12%, 60%)',
        heavyDarkBlue:'hsl(228, 12%, 13%)',
        lightPaleRed:'hsl(13, 100%, 95%)',
        lightGrey: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
