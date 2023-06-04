<template>
  <div>
    <section id="home" class="pt-28 ">
      <div class="container">
        <div class="flex flex-wrap">
          <div ref="me" class="w-full self-center px-4 lg:w-1/2 animated-ele opacity-0">
            <h1 class="text-base font-semibold text-blue-500 md:text-xl">
              Hello Everyone ✌,
              I'm
              <span class="mt-1 block text-3xl font-bold text-slate-900  lg:text-4xl">Pramudita
              </span>
            </h1>
            <h2 class="mb-5 text-lg font-medium text-slate-900  lg:text-2xl">
              Web Developer & <span class="font-dark"> Digital Advertising</span>
            </h2>
            <p class="mb-5 font-medium leading-relaxed text-slate-400">
              I code just for fun & i love it
            </p>
            <NuxtLink to="/project"
              class="rounded-full bg-blue-500 py-3 px-8 text-base font-semibold text-white transition duration-300 hover:bg-blue-400 hover:shadow-lg">
              My Fun Project</NuxtLink>
          </div>
          <div ref="anime" class="w-full self-end px-4 lg:w-1/2 opacity-0">
            <div class="relative mt-10 lg:right-0 lg:mt-0">
              <img src="../public/c.png" alt="" class="relative z-10 mx-auto max-w-full" />
              <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 md:scale-x-125">
                <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="rgb(59 130 246)"
                    d="M27.5,-39.4C36.6,-36.9,45.7,-30.9,47.4,-22.9C49.1,-14.8,43.5,-4.7,40.1,4.5C36.8,13.6,35.7,21.8,33.1,33.6C30.5,45.5,26.5,61,16.6,70C6.8,79,-8.9,81.4,-18.7,73.9C-28.4,66.3,-32.2,48.7,-39.9,36.5C-47.7,24.2,-59.4,17.2,-65.1,6.7C-70.8,-3.9,-70.6,-18,-64.2,-28.2C-57.8,-38.5,-45.4,-44.9,-33.7,-46.2C-22,-47.6,-11,-43.9,-0.9,-42.5C9.2,-41.1,18.4,-42,27.5,-39.4Z"
                    transform="translate(100 100)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="pt-36 pb-10 ">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="mb-10 w-full px-4 lg:w-1/2" ref="aboutme">
            <h4 class="mb-3 text-lg font-bold uppercase text-blue-500">
              Tentang Saya
            </h4>
            <h2 class="mb-3 max-w-md text-2xl font-bold text-slate-900  lg:text-4xl" id="nama">
              Pramudita
            </h2>
            <p class="max-w-xl text-base font-medium text-slate-500 lg:text-lg my-element">
              Hi, I'm Pramudita Ahmad from Indonesia, I like code, have good knowledge on the frontend such as web design,
              consume api, etc. sometimes i use cloud database for my project like a firebase/supabase. but i am good to
              make Rest Api use backend tools like a nodejs/laravel. except that i really like a digital marketing like a
              handling ads use google ads.
            </p>
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <h3 class="mb-3 text-2xl font-semibold text-slate-900  lg:pt-10 lg:text-3xl">
              Sosial media
            </h3>
            <p class="mb-6 text-base font-medium text-slate-500 lg:text-lg">
              If you want to know more about me, you can follow the social media below.
            </p>
            <div class="flex items-center">
              <!-- Facebook -->
              <a href="https://www.facebook.com/pramudita.ahmad.10" target="_blank"
                class="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-500 text-slate-500 hover:border-blue-400 hover:bg-blue-400 hover:text-white">
                <svg class="fill-current" role="img" width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Facebook</title>
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <!-- Instagram -->
              <a href="https://www.instagram.com/suhn_flou_er/?hl=en" target="_blank"
                class="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-500 text-slate-500 hover:border-blue-400 hover:bg-blue-400 hover:text-white">
                <svg role="img" width="20px" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram</title>
                  <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <!-- Twitter -->
              <a href="https://twitter.com/PramuditaAhmad1" target="_blank"
                class="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-500 text-slate-500 hover:border-blue-400 hover:bg-blue-400 hover:text-white">
                <svg role="img" width="20px" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Twitter</title>
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <!-- LinkId -->
              <a href="https://www.linkedin.com/in/pramudita-ahmad-4ba11a232/" target="_blank"
                class="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-500 text-slate-500 hover:border-blue-400 hover:bg-blue-400 hover:text-white">
                <svg role="img" width="20px" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn</title>
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import gsap from 'gsap'
const me = ref(null)
const anime = ref(null)
const aboutme = ref(null)

onMounted(() => {

  // gsap.from(anime.value, { x: 100, opacity: 0, duration: 1 })
  gsap.from(aboutme.value, {
    opacity: 0, duration: 4,
  })
  gsap.fromTo(
    me.value,
    { opacity: 0 },
    { opacity: 1, duration: 2, ease: 'power2.out' }
  )
  gsap.fromTo(
    anime.value,
    { opacity: 0 },
    { opacity: 1, duration: 2, ease: 'power2.out' }
  )
})

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');



#main {
  font-family: 'Inter', sans-serif;
  background: url(../public/noise.webp);
  background-repeat: repeat;
  background-size: 100px;
  top: 0;
  left: 0;
}
</style>