<template>
  <div id="main">
    <Navbar />
    <section class="pt-24 pb-10">
      <p v-if="loading" class="font-semibold text-center text-2xl text-slate-700 italic h-screen">data sedang dimuat</p>
      <div class="container" v-for="d in datas" :key="d.id">

        <div class="group portfolio flex flex-wrap mb-16 align-middle hover:no-underline focus:no-underline">
          <!-- di gunain di page project -->
          <div class="w-full md:w-6/12 relative h-52 md:h-96">
            <img :src="d.img"
              class="absolute object-cover w-full h-full rounded-2xl transform duration-200 group-hover:-translate-y-2 group-hover:shadow-xl" />
          </div>
          <div class="w-full md:w-5/12 mt-5 md:mt-0 md:ml-10 self-center">
            <h3 class="text-2xl md:text-4xl font-normal leading-tight group-hover:underline text-slate-800">
              {{ d.nama }}
            </h3>
            <p class="mt-2 mb-4 text-base text-slate-500">{{ d.deskripsi }}</p>
            <!-- <div class="mt-5" ></div> -->
            <a :href="d.github" class="mt-5 text-slate-800   inline-flex items-center group-hover:underline duration-200">
              View Project
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 duration-200" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <!-- info -->
        <div class="col-span-10 sm:col-span-5">
          <div class="">

            <!-- Info Box -->
            <div class="grid sm:grid-cols-2 gap-5 mt-10">
              <div class="info-box p-5 rounded-lg bg-gray-100 ">
                <div class="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-blue-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>

                  <h4 class="font-bold ml-2 text-slate-800">Type Project</h4>
                </div>
                <p class="font-medium text-slate-700 text-lg">{{ d.type }}</p>
              </div>
              <div class="info-box p-5 rounded-lg bg-gray-100 ">
                <div class="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-blue-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>

                  <h4 class="font-bold ml-2 text-slate-800">Source</h4>
                </div>
                <a :href="d.github" class="font-medium text-slate-700 text-lg underline">github</a>
              </div>
              <div class="info-box p-5 rounded-lg bg-gray-100 ">
                <div class="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-blue-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <h4 class="font-bold ml-2 text-slate-800">Stack</h4>
                </div>
                <p class="font-medium text-slate-700 text-lg">{{ d.stack }}</p>
              </div>
              <div class="info-box p-5 rounded-lg bg-gray-100 ">
                <div class="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-blue-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>

                  <h4 class="font-bold ml-2 text-slate-800">Link</h4>
                </div>
                <p class="font-medium text-slate-700 text-lg">{{ d.link }}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute()
const supabase = useSupabaseAuthClient()
const datas = ref([])
const loading = ref(true)
const getDatas = async () => {
  loading.value = true
  const { data, error } = await supabase.from("project").select()
    .order("id", { ascending: false })
    .eq("id", route.params.id)
  datas.value = data

  loading.value = false
}
onMounted(() => {
  getDatas()
})
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

#main {
  font-family: 'Inter', sans-serif;
  background: url(../../public/noise.webp);

  /* background-color: red; */
  background-repeat: repeat;
  background-size: 100px;
  top: 0;
  left: 0;
}
</style>