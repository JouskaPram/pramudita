<template>
  
  <p v-if="loading" class="font-semibold text-center text-2xl text-slate-700">data sedang dimuat</p>   
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8" >  
    <article class="bg-white/5 border  p-5 rounded-3xl" v-for="d in datas" :key="d.id">
          <img
            :src="d.img"
            alt="gamar"
            class="rounded-2xl mb-5 shadow-xl w-full h-[225px] hover:scale-105 duration-300"
            width="400px"
            height="300px "
            loading="lazy"
          >
          <!-- Blog Meta -->
          <div class="inline-flex items-center mb-2">
            <div class="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-slate-500 mr-2 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
      
              <span class="text-slate-500">{{ d.created_at }}</span>
            </div>
         
          </div>
          <!-- ./ Blog Meta  -->
          <NuxtLink :to="`/project/`+d.id" class="font-semibold text-slate-700">
        <h3 class="text-lg text-slate-700 leading-tight font-bold">
        {{ d.nama }}
        </h3>
      </NuxtLink>
         
        </article>   
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
