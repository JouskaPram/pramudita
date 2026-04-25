// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules:["@nuxtjs/supabase",'@hypernym/nuxt-gsap'],
    css: ['~/style/css/main.css'],
    runtimeConfig: {
      public: {
        mediumUsername: 'rheaa2602',
        mediumRssToJsonEndpoint: 'https://api.rss2json.com/v1/api.json?rss_url='
      }
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    
})
