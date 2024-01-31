// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  googleFonts: {
    families: {
      'Noto Serif TC': true
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
