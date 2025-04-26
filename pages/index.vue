<template>
  <div id="main" class="">
    <Navbar />

    <!-- about me -->
    <AboutMe />
    <!-- endabout me -->
    <div class="services section pt-10 container pb-10 ">
  <div class="px-4">
    <h2 class="mb-3 text-lg font-bold uppercase text-blue-500">What I Can Do</h2>
    <p class="text-base font-medium text-slate-500 lg:text-lg mb-4">
      I am a Fullstack Developer with experience in both web development and machine learning.
      I follow clean code principles and focus on building maintainable and scalable systems.  
      I mainly work with Go, PHP, and JavaScript using various frameworks within each language.
      With over 3 years of experience since I was 17 (currently 20), I have built a solid understanding of both frontend and backend systems.
    </p>
  </div>
  <div class="px-4 mt-8">
    <div class="grid gap-10 grid-cols-1 md:grid-cols-3">
      <serviceCard title="Front-End Development"
        description="I create responsive and dynamic interfaces based on UI/UX design using Tailwind CSS for styling. I use Vue or Nuxt to consume APIs efficiently and build reactive frontend experiences.">
        <!-- Icon SVG here -->
      </serviceCard>

      <serviceCard title="Back-End Development"
        description="I work with Go, PHP, and JavaScript, with strong expertise in SQL/NoSQL databases. I implement caching systems like Redis, build secure endpoints, and structure systems with performance and scalability in mind. I'm also experienced with Docker, RESTful APIs, optimizing queries, and managing message brokers for asynchronous jobs. I aim for clear architecture and high reliability.">
        <!-- Icon SVG here -->
      </serviceCard>

      <serviceCard title="Mobile Development"
        description="I build cross-platform mobile apps using Flutter and also have experience with hybrid frameworks like Ionic. I'm comfortable translating UI/UX into functional mobile interfaces and focus on delivering a smooth user experience across devices.">
        <!-- Icon SVG here -->
      </serviceCard>
    </div>
  </div>
</div>

    <!-- porfolio -->
    <div class="section container pt-10 pb-10">
      <div class="px-4">
        <h2 class="section-heading mb-4 text-center font-bold text-2xl text-blue-500 ">My Project</h2>
        <p class="text-center mb-4 text-gray-400 text-md">Lihat project saya sebelumnya^^</p>
        <project />
        <div class="mt-12 text-center">
          <NuxtLink to="/project"
            class="text-gray-800 font-semibold border border-gray-800 py-2 px-5 hover:px-6 rounded-full inline-flex items-center group transform hover:text-primary hover:-translate-y-1 duration-200">
            View All Projects
            <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-2 duration-200" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- testi card -->
    <div class="section container pt-16">
      <div class="px-4">
        <h2 class="section-heading mb-4 text-center font-bold text-2xl text-blue-500 ">My Skill</h2>
        <p class="text-center mb-4 text-gray-400 text-md">Seberapa Mahir Saya Dalam Tools Yang Di Gunakan?</p>
        <Myskill />
        </div>
      </div>

      <div class="section container pt-16">
      <div class="px-4">
        <h2 class="section-heading mb-4 text-center font-bold text-2xl text-blue-500 ">My Favorite Music</h2>
        <p class="text-center mb-4 text-gray-400 text-md">
          I love music, here are some of my favorite songs.
        </p>
        <Spotify />
        </div>
      </div>
    <!-- contact -->
    <div class="pt-10 px-5">
      <div class="cotainer sm:mt-14 mx-auto max-w-2xl text-center">
        <h1 class="leading-tight text-slate-700 text-4xl md:text-5xl mb-5">
          Contact Me 🚀
        </h1>
        <p class="text-sm text-slate-400 md:text-base md:px-12">
         If you want some cookies from me, lets send your msg^^</p>
      </div>
    </div>
    <section class="container py-10">
      <contact />
    </section>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup>


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