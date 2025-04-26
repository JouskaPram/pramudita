<template>
  <div>
    <section id="home" class="pt-28 ">
      <div class="container">
        <div class="flex flex-wrap">
          <div ref="me" class="w-full self-center px-4 lg:w-1/2 animated-ele opacity-0">
            <h1 class="text-base font-semibold text-blue-500 md:text-xl">
              Hello Everyone,
              I'm
              <span class="mt-1 block text-3xl font-bold text-slate-900 lg:text-4xl">Pramudita
              </span>
            </h1>
            <h2 class="mb-5 text-lg font-medium text-slate-900 lg:text-2xl">
              Software Engineer & <span class="font-dark"> Music Lover</span>
            </h2>
            <p class="mb-5 font-medium leading-relaxed text-slate-400">
              I code just for fun & I love it
            </p>
            <a href="resume.pdf" target="_blank"
              class="rounded-full bg-blue-500 py-3 px-8 text-base font-semibold text-white transition duration-300 hover:bg-blue-400 hover:shadow-lg">
              Resume
            </a>
            <a href="http://github.com/pramahmad" class="md:inline hidden ml-4 py-3 rounded-full px-8 text-base bg-black text-white transition duration-300 hover:bg-transparent hover:border hover:border-black hover:text-black">
              Github Account
            </a>
          </div>
          <div ref="anime" class="w-full self-end px-4 lg:w-1/2 opacity-0">
            <div class="relative mt-10 lg:right-0 lg:mt-0">
              <img src="../public/pramudita.png" alt="" class="relative z-10 mx-auto max-w-full" />
              <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 md:scale-x-125">
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
              About Me
            </h4>
            <h2 class="mb-3 max-w-md text-2xl font-bold text-slate-900 lg:text-4xl" id="nama">
              Pramudita
            </h2>
            <p class="max-w-xl text-base font-medium text-slate-500 lg:text-lg my-element">
              Hello, I'm Pramudita Ahmad, a 20-year-old Information Systems student at Siliwangi University, Tasikmalaya. I've been immersed in programming since I was 17, giving me 3 years of hands-on experience. I possess strong problem-solving skills when facing challenges and have developed expertise in web development, mobile development, and machine learning.
            </p>
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <h3 class="mb-3 text-2xl font-semibold text-slate-900 lg:pt-10 lg:text-3xl">
              Social Media
            </h3>
            <p class="mb-6 text-base font-medium text-slate-500 lg:text-lg">
              If you want to get to know me better, you can reach out through my social media accounts.
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