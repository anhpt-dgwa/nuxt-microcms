// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt',
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
  plugins: [
    { src: '~/plugins/jquery/dist/jquery.min.js', mode: 'client' },
    { src: '~/plugins/bootstrap/js/bootstrap.min.js', mode: 'client' },
    { src: '~/plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js', mode: 'client' },
    { src: '~/plugins/instafeed/instafeed.min.js', mode: 'client' },
    { src: '~/plugins/ekko-lightbox/dist/ekko-lightbox.min.js', mode: 'client' },
    { src: '~/plugins/syo-timer/build/jquery.syotimer.min.js', mode: 'client' },
    { src: '~/plugins/slick/slick.min.js', mode: 'client' },
    { src: '~/plugins/slick/slick-animation.min.js', mode: 'client' },
    { src: '~/assets/js/script.js', mode: 'client' },
  ],
})
