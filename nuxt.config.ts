// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules:["@nuxtjs/supabase",'@hypernym/nuxt-gsap'],
    css: ['~/style/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      plugins: ['~/plugins/gsap'],
})
