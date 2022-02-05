const colors = require('tailwindcss/colors')

module.exports = {
  enabled: process.env.NODE_ENV === "production",
  mode: 'jit',
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{
      colors: {
        blueGray: colors.blueGray,
        emerald: colors.emerald,
        'green': '#1E8803',
        'green-light': '#71BC57'
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
