import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - traderz',
    title: 'traderz',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [
    '@/plugins/filters.js',
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/svg',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/moment',
  ],
  modules: [ '@nuxtjs/axios', '@nuxtjs/auth-next', 'nuxt-svg-loader' ],
  axios: {
    baseURL: '/',
  },
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Manrope',
        size: 14,
      },
      icons: 'fa',
    },

    treeShake: true,
  },
  build: {
    postcss: null,
  },
  googleFonts: {
    families: {
      Manrope: true,
    },
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true,
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false }, // Disables prefixing for SVG IDs
      ],
    },
  },
  server: {
    port: 5000, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false,
  },
}
