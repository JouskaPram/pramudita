<template>
  <div>

    <p v-if="loading" class="custom-loader m-auto text-center"></p>
    <div class="group portfolio flex flex-wrap mb-16 align-middle hover:no-underline focus:no-underline"
      v-for="d in datas" :key="d.id">
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
        <NuxtLink :to="`/project/` + d.id"
          class="mt-5 text-slate-800   inline-flex items-center group-hover:underline duration-200">
          View Project
          <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 duration-200" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button v-if="!datas.length < count && !load"
        class="rounded-full bg-blue-500 py-3 px-8 text-base font-semibold text-white transition duration-300 hover:bg-blue-400 hover:shadow-lg"
        @click="loadmore">
        More Project
      </button>
      <p v-if="!datas.length < count && load" class="custom-loader m-auto text-center"></p>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const datas = ref([])
const count = ref(0)
const loading = ref(true)
const load = ref(true)
const getDatas = async () => {
  loading.value = true
  const { data, error } = await supabase.from("project").select()
    .range(0, 3)
    .order("id", { ascending: false })
  if (data) count.value = data.length
  datas.value = data
  loading.value = false
  load.value = false
}
const loadmore = async () => {
  load.value = true
  let limitStar = datas.value.length
  let limitEnd = limitStar + 2
  const { data, error } = await supabase.from("project")
    .select()
    .range(limitStar, limitEnd)
    .order("id", { ascending: false })
  if (data) {
    for (let i = 0; i < data.length; i++) {
      datas.value.push(data[i]);
    }
  }
  load.value = false

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
