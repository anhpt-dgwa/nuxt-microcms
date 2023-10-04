// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt',
      script: [
        { src: '_nuxt/plugins/jquery/dist/jquery.min.js' },
        { src: '_nuxt/plugins/bootstrap/js/bootstrap.min.js'},
        //{ src: '_nuxt/plugins/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js'},
        { src: '_nuxt/plugins/slick/slick.min.js' },
        //{ src: '_nuxt/plugins/slick/slick-animation.min.js' },
        { src: '_nuxt/assets/js/script.js' },
      ],
    }
  },
  css: [
    '~/plugins/themefisher-font/style.css',
    '~/plugins/bootstrap/css/bootstrap.min.css',
    '~/plugins/animate/animate.css',
    '~/plugins/slick/slick.css',
    '~/plugins/slick/slick-theme.css',
    '~/assets/scss/style.scss',
  ],
  // plugins: [
  //   { src: '~/plugins/jquery/dist/jquery.min.js', mode: 'client' },
  //   { src: '~/plugins/bootstrap/js/bootstrap.min.js', mode: 'client' },
  //   { src: '~/plugins/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js', mode: 'client' },
  //   { src: '~/plugins/instafeed/instafeed.min.js', mode: 'client' },
  //   { src: '~/plugins/ekko-lightbox/dist/ekko-lightbox.min.js', mode: 'client' },
  //   { src: '~/plugins/syo-timer/build/jquery.syotimer.min.js', mode: 'client' },
  //   { src: '~/plugins/slick/slick.min.js', mode: 'client' },
  //   { src: '~/plugins/slick/slick-animation.min.js', mode: 'client' },
  //   { src: '~/assets/js/script.js', mode: 'client' },
  // ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['.vue'],
    }
  ],
  modules: [
    [
      'nuxt-microcms-module',
      {
        serviceDomain: 'yuzobcsj9a.microcms.io', // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
        apiKey: 'q3wOL4p41lveC4pSEBGiMGIbgkf8FCFxltjg',
        // target: 'server',
      },
    ],
  ],
  //modules: ["nuxt-microcms-module"],
  //microCMS: {
  //  serviceDomain: 'https://yuzobcsj9a.microcms.io/api/v1/',
  //  apiKey: 'q3wOL4p41lveC4pSEBGiMGIbgkf8FCFxltjg',
  //}
})
