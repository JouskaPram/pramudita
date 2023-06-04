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
              My Fun Project
            </NuxtLink>
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
            <SocialMedia />
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