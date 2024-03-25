<template>
  <div id="main" class="">
    <Navbar />

    <!-- about me -->
    <AboutMe />
    <!-- endabout me -->
    <div class="services section pt-10 container pb-10 ">
      <div class=" px-4">
        <h2 class="mb-3 text-lg font-bold uppercase text-blue-500">What I Can Do</h2>
        <p class="text-base font-medium text-slate-500 lg:text-lg  mb-4">
         saya memiliki  kemampuan di fullstack developer dan machine learning <br />
          terbiasa menerapkan cleancode dan menerapkan prinsip SOLID. untuk bahasa pemrograman yang biasa saya pakai 
          adalah golang,javascript,python dan php dengan framework dalam bahasa pemrograman tersebut.
          </p>
      </div>
      <div class="px-4 mt-8">
        <div class="grid gap-10 grid-cols-1 md:grid-cols-3">
          <serviceCard title="Front End Web"
            description="Saya dapat membuat web dengan desain yang sesuai dari UI/UX dengan menggunakan tailwind css untuk styling. lalu
            untuk consume API saya menggunakan front end framework VUE/NUXT"><svg
              id="bold" class="h-16" enable-background="new 0 0 32 32" viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                fill="#e3f8fa" />
              <g fill="#8ce1eb">
                <path
                  d="m18.569 23.431c-.876-.876-.902-1.724-.902-1.766-.001-.183-.15-.331-.333-.331h-2.68c-.184 0-.333.151-.333.335 0 .036-.012.885-.889 1.762-.095.095-.124.239-.072.363.05.125.172.206.307.206h4.667c.135 0 .257-.081.308-.206.051-.124.022-.268-.073-.363z" />
                <path
                  d="m19 16.66h-6c-.184 0-.333-.149-.333-.333v-.781c0-.445.173-.864.488-1.179l.845-.846v-1.895c0-.805.27-1.599.76-2.236l.975-1.268c.126-.164.402-.164.529 0l.975 1.268c.49.637.76 1.431.76 2.236v1.895l.845.845c.315.315.488.733.488 1.179v.781c.001.184-.148.334-.332.334z" />
                <path
                  d="m17.667 17.993c-.368 0-.667-.299-.667-.667v-1c0-.368.298-.667.667-.667.368 0 .667.299.667.667v1c-.001.368-.299.667-.667.667z" />
                <path
                  d="m14.333 17.993c-.368 0-.667-.299-.667-.667v-1c0-.368.298-.667.667-.667.368 0 .667.299.667.667v1c0 .368-.298.667-.667.667z" />
              </g>
              <path
                d="m22.833 10.667h-3.6c.067.313.1.64.1.96v.373h3.333v7.333h-13.333v-7.333h3.333v-.373c0-.32.033-.647.1-.96h-3.6c-.639 0-1.166.526-1.166 1.166v9c0 .64.527 1.167 1.167 1.167h13.667c.639 0 1.166-.527 1.166-1.167v-9c0-.64-.527-1.166-1.167-1.166z"
                fill="#26c6da" />
            </svg>
          </serviceCard>
          <serviceCard title="Backend Dev"
            description="
  Saya menggunakan Golang, PHP, dan JavaScript sebagai bahasa pemrograman, dengan keahlian dalam database SQL, NoSQL, dan penggunaan Redis untuk caching efisien. Memiliki pemahaman yang kuat tentang konsep backend, seperti queue dan security, saya fokus pada pembangunan solusi yang andal, efisien, dan aman.
">
            <svg id="bold" class="h-16" enable-background="new 0 0 32 32" viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                fill="#ffe6e2" />
              <path
                d="m21.867 13.687c-.547 0-1.047-.207-1.42-.547v2.513h-1.7c.153-.34.233-.72.233-1.107 0-1.547-1.26-2.8-2.8-2.8-1.547 0-2.8 1.253-2.8 2.8 0 .387.08.767.227 1.107h-2.053v-6.94c0-.393.32-.713.713-.713h7.467c.393 0 .713.32.713.713v1.253c.48-.433 1.153-.647 1.88-.493.82.167 1.487.853 1.633 1.68.254 1.354-.779 2.534-2.093 2.534z"
                fill="#fd907e" />
              <path
                d="m16.925 19.328c-.249 1.358.782 2.539 2.097 2.539.547 0 1.045-.206 1.422-.548v1.97c0 .391-.32.711-.711.711h-7.465c-.391 0-.711-.32-.711-.711v-1.97c-.483.434-1.159.647-1.884.498-.818-.171-1.486-.853-1.635-1.678-.249-1.359.782-2.539 2.097-2.539.547 0 1.045.206 1.422.548v-1.825h3.441c-.576-.384-.953-1.031-.953-1.778 0-1.18.953-2.133 2.133-2.133s2.133.953 2.133 2.133c0 .747-.377 1.394-.953 1.778h3.086v1.825c-.483-.434-1.159-.647-1.884-.498-.817.17-1.486.853-1.635 1.678z"
                fill="#fc573b" />
            </svg>
          </serviceCard>
          <serviceCard title="Mobile Dev"
            description="
Saya menguasai potong desain UI/UX dan memiliki pengalaman luas dalam menggunakan Flutter untuk aplikasi mobile lintas platform. Keterampilan tambahan dalam pengembangan aplikasi hybrid menggunakan Ionic memungkinkan saya untuk menciptakan pengalaman pengguna yang lancar dan aplikasi responsif di berbagai platform.">
            <svg id="bold" class="h-16" enable-background="new 0 0 32 32" viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                fill="#f5e6fe" />
              <path
                d="m17.396 19.287c-.02.013-.033.02-.053.033v2.013h-8v-11.333c0-.367.3-.667.667-.667h6.667c.367 0 .667.3.667.667v.053c.22-.04.44-.053.667-.053.2 0 .393.013.58.04.027-.027.06-.047.087-.067-.015-1.086-.909-1.973-2.002-1.973h-6.667c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6.667c1.1 0 2-.9 2-2v-2.72c-.22.04-.44.053-.667.053-.206 0-.413-.013-.613-.046z"
                fill="#be63f9" />
              <g fill="#d9a4fc">
                <path
                  d="m23.951 10.608c-.079-.186-.262-.307-.464-.305l-1.167.009-.009-1.167c-.001-.203-.124-.384-.311-.46s-.402-.032-.544.112l-1.654 1.679c-.093.094-.145.222-.144.355l.011 1.466c-.006.006-.014.008-.02.014l-1.985 2.015c-.194.197-.192.513.005.707.098.097.227.145.355.144s.255-.051.352-.149l1.985-2.015c.006-.006.008-.014.013-.02l1.466-.011c.132-.001.259-.055.352-.149l1.654-1.679c.143-.144.184-.36.105-.546z" />
                <path
                  d="m21.276 13.987h-.473l-.793.807c-.053 1.047-.913 1.873-1.973 1.88-1.107.013-2.007-.88-2.02-1.98-.007-1.067.82-1.94 1.867-2.013l.78-.793v-.488c-.22-.04-.44-.06-.667-.06-1.84.02-3.327 1.52-3.313 3.36.02 1.84 1.527 3.32 3.36 3.307 1.84-.013 3.327-1.52 3.307-3.353-.002-.227-.028-.454-.075-.667z" />
              </g>
            </svg>
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
    <!-- contact -->
    <div class="pt-10 px-5">
      <div class="cotainer sm:mt-14 mx-auto max-w-2xl text-center">
        <h1 class="leading-tight text-slate-700 text-4xl md:text-5xl mb-5">
          Kontak Saya Disini 🚀
        </h1>
        <p class="text-sm text-slate-400 md:text-base md:px-12">
          Jika kamu ingin berinteraksi dengan saya, apapun yang akan dibahas^^ </p>
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