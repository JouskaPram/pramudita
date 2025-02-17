<template>
    <section class="text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Avatar (Kiri) dengan Bubble Chat -->
          <div class="flex justify-end   lg:justify-end items-betjustify-end   relative">
            <!-- Bubble Chat -->
            <div class="absolute -left-4 lg:-left-8 top-14 bg-gray-800 rounded-lg p-4 shadow-lg md:max-w-[230px] max-w-[170px]">
              <p class="text-sm">"Don't code too much, sometimes you have to listen to music!" 🎶</p>
              <div class="absolute -right-2 top-4 w-4 h-4 bg-gray-800 transform rotate-45"></div>
            </div>
            <!-- Avatar -->
            <div class="relative  md:left-36 ">
              <img
                src="../public/avatar.png"
                alt="Avatar"
                class="max-w-full h-full md:scale-125 md:-translate-x-full md:mx-20 mx-0 translate-x-0  rounded-full"
              />
            </div>
          </div>
  
          <!-- Daftar Musik Favorit (Kanan) -->
          <div>
            <div class="space-y-6">
              <!-- Spotify Embed Item -->
              <div class="p-2 rounded-lg bg-gray-100 border border-gray-200">
                <iframe
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/4DhyEPT1syGLKMnKDo1vvh?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <!-- Repeat for other songs -->
              <div class="p-2 rounded-lg bg-gray-100 border border-gray-200">
                <iframe
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/2uOEendbLHR18khIbwooJ1?utm_source=generator&theme=0"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div class="p-2 rounded-lg bg-gray-100 border border-gray-200">
                <iframe
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/2kJwzbxV2ppxnQoYw4GLBZ?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div class="p-2 rounded-lg bg-gray-100 border border-gray-200">
                <iframe
                  style="border-radius:12px"
                  src="https://open.spotify.com/embed/track/530l1XggFTVKZIM3khE10r?utm_source=generator"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>