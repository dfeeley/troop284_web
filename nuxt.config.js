export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Troop 284, Lafayette',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'We are a newly established Boy Scout Troop in Lafayette CA.  We embrace the ideals of Scouting while advancing young leaders of high moral character emphasizing citizenship training, character development, and personal fitness.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "og:site_name", content: "TROOP 284, LAFAYETTE" },
      { name: "og:title", content: "TROOP 284, LAFAYETTE" },
      { name: "og:description", content: "We are a newly established Boy Scout Troop in Lafayette CA.  We embrace the ideals of Scouting while advancing young leaders of high moral character emphasizing citizenship training, character development, and personal fitness." },
      { name: "og:url", content: "https://www.bsatroop284.org/" },
      { name: "title", content: "Boy Scout Troop 284 - Lafayette, CA" },
      { name: "description", content: "We are a newly established Boy Scout Troop in Lafayette CA.  We embrace the ideals of Scouting while advancing young leaders of high moral character emphasizing citizenship training, character development, and personal fitness." },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "Boy Scout Troop 284 - Lafayette, CA" },
      { name: "twitter:title", content: "Boy Scout Troop 284 - Lafayette, CA" },
      { name: "twitter:description", content: "We are a newly established Boy Scout Troop in Lafayette CA.  We embrace the ideals of Scouting while advancing young leaders of high moral character emphasizing citizenship training, character development, and personal fitness." },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Maven+Pro:400,700&amp;subset=latin,latin-ext' }
    ]
  },

  env: {
    GOOGLE_MAPS_APIKEY: process.env.GOOGLE_MAPS_APIKEY
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      "~layouts/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vuetify.js',
    '~plugins/vue-gallery.client.js',
    '~plugins/google-maps.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/sanity/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-scrollto/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vuetify'],
    transpile: [/^vue2-google-maps($|\/)/],
  },

  sanity: {
    projectId: 'garjbqnq'
  },

//  router: {
//    async scrollBehavior(to) {
//      if (to.hash) {
//        let el = await findEl(to.hash)
//        if ('scrollBehavior' in document.documentElement.style) {
//          return window.scrollTo({ top: el.getBoundingClientRect().top+window.scrollY, behavior: 'smooth' })
//        } else {
//          return window.scrollTo(0, el.getBoundingClientRect().top+window.scrollY)
//        }
//      }
//    }
//  }
}
