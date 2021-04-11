module.exports = {
  purge: [
    './public/**/*.html',
   './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
       'hero-pattern': "url(/src/assets/Background-image.png)",
       'blog-pattern': "url('/src/assets/Abract01.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
