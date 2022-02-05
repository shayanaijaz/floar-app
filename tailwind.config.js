const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
      colors: {
        blueGray: colors.blueGray,
        emerald: colors.emerald
      }
    }
  },
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),require('@tailwindcss/typography')
  ],
}
