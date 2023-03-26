const main_base_URL = 'https://jet-supply.com';
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jet Supply',
    titleTemplate: 'Jet Supply: %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Private Jet Charter | Global Network | Low Fees',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'On-demand private jet travel solutions.'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.jet-supply.com/_nuxt/image/0e7161.jpeg'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https:///www.jet-supply.com/'
      },
      { property: 'og:locale',
        content: 'en_US'
      },
      {
        hid: 't-type',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org/
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  robots: [
    {
      UserAgent: '*',
      Disallow: '/users'
    },
    {
      UserAgent: '*',
      Disallow: '/admin'
    },
    {
      UserAgent: '*',
      Disallow: '/_nuxt'
    }
  ],

  sitemap: {
    hostname: main_base_URL
  },

  env: {
    main_base_URL
  },
}
