<template>
  <p v-if="loading" class="font-semibold text-center text-2xl text-slate-700 italic h-screen">data sedang dimuat</p> 
    <div class="group portfolio flex flex-wrap mb-16 align-middle hover:no-underline focus:no-underline" v-for="d in datas" :key="d.id">
    <!-- di gunain di page project -->
    <div class="w-full md:w-6/12 relative h-52 md:h-96" >
      <img 
        :src="d.img"
        class="absolute object-cover w-full h-full rounded-2xl transform duration-200 group-hover:-translate-y-2 group-hover:shadow-xl"
      />
    </div>
    <div class="w-full md:w-5/12 mt-5 md:mt-0 md:ml-10 self-center">
      <h3
        class="text-2xl md:text-4xl font-normal leading-tight group-hover:underline text-slate-800"
      >
      {{ d.nama }}
      </h3>
      <p class="mt-2 mb-4 text-base text-slate-500">{{ d.deskripsi }}</p>
      <!-- <div class="mt-5" ></div> -->
      <NuxtLink
        :to="`/project/`+d.id"
        class="mt-5 text-slate-800   inline-flex items-center group-hover:underline duration-200"
      >
        View Project
        <svg
          class="w-4 h-4 ml-2 transform group-hover:translate-x-2 duration-200"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </NuxtLink>
    </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const datas = ref([])
const loading = ref(true)
const getDatas = async ()=>{
  loading.value = true
  const {data,error} = await supabase.from("project").select()
  .order("id",{ascending:false})
  datas.value = data
  loading.value = false
}
onMounted(()=>{
  getDatas()
})
</script>

<style lang="scss" scoped>
</style>
