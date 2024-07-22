// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        },
      ],
    },
  },

  devtools: {enabled: true},

  modules: [
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    // "nuxt-auth-utils",
    // '@sidebase/nuxt-auth',
  ],

  primevue: {
    components: {
      // prefix: 'Prime'
    },
    // importTheme: { from: "@/primevue/themes/aura" },
    importTheme: {from: "@/themes/aura.ts"},
  },

  css: [
    "primeicons/primeicons.css",
  ],

  plugins: [
    // '~/plugins/api.ts'
  ],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8001',
      //baseURL: process.env.BASE_URL || 'http://localhost:8000',
    },
  },

  compatibilityDate: '2024-07-22',
})