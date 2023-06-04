<template>
  <p v-if="loading" class="custom-loader m-auto text-center"></p>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 ">
    <article class="bg-white/5 border  p-5 rounded-3xl " v-for="d in datas" :key="d.id" ref="project">
      <NuxtLink :to="`/project/` + d.id">

        <img :src="d.img" alt="gamar" class="rounded-2xl mb-5 shadow-xl w-full h-[200px] hover:scale-105 duration-300"
          width="400px" height="150px " loading="lazy">
      </NuxtLink>
      <!-- Blog Meta -->
      <div class="inline-flex items-center mb-2">
        <div class="inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 text-slate-500 mr-2 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>

          <span class="text-slate-500">{{ d.created_at }}</span>
        </div>

      </div>

      <NuxtLink :to="`/project/` + d.id" class="font-semibold text-slate-700">
        <h3 class="text-lg text-slate-700 leading-tight font-bold">
          {{ d.nama }}
        </h3>
      </NuxtLink>

    </article>

  </div>
</template>
<script setup>
import gsap from 'gsap'
const project = ref(null)
const supabase = useSupabaseAuthClient()
const datas = ref([])
const loading = ref(true)
const getDatas = async () => {
  loading.value = true
  const { data, error } = await supabase.from("project").select()
    .order("id", { ascending: false })
    .range(0, 5)
    .limit(6)
  datas.value = data

  loading.value = false
  gsap.fromTo(
    project.value,
    { opacity: 0 },
    { opacity: 1, duration: 4, ease: 'power2.out' }
  )
}
onMounted(() => {
  getDatas()







})
</script>
<style>
.custom-loader {
  width: 45px;
  height: 40px;
  --c: linear-gradient(#3b82f6 0 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 9px 100%;
  background-repeat: no-repeat;
  animation: b2 1s infinite linear;
}

@keyframes b2 {
  20% {
    background-size: 9px 60%, 9px 100%, 9px 100%
  }

  40% {
    background-size: 9px 80%, 9px 60%, 9px 100%
  }

  60% {
    background-size: 9px 100%, 9px 80%, 9px 60%
  }

  80% {
    background-size: 9px 100%, 9px 100%, 9px 80%
  }
}
</style>