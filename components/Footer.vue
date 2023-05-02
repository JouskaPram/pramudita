<script setup>
const supabase = useSupabaseAuthClient()
const email = ref()
const addEmail = async ()=>{
  const {data,error} = await supabase
  .from("busines")
  .insert({
    email:email.value
  })
  if(error){
    console.log(error)
  }
}
</script>

<template>
    <footer class="pt-16 pb-8 border-t dark:border-gray-600  sm:mb-0">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-10 gap-10">
        <div class="col-span-1 md:col-span-4">
          <!-- <img src="https://phkbtvdsbhjnnytanhqu.supabase.co/storage/v1/object/public/projects/1669049836830.jpg" alt="" class="w-24 h-24  rounded-full"> -->
          <h5 class="text-slate-700 font-semibold">Who Am I?</h5>
          <p class="my-4 block sm:w-10/12 text-slate-500">
            I’m <span class="font-semibold text-blue-500">Pramudita Ahmad</span>, a Full Stack Web Developer, I code just for fun & i love it
          </p>
          <!-- <social-buttons> </social-buttons>    -->
        </div>
        <div class="col-span-1 md:col-span-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 class="font-semibold text-lg text-slate-700" >Quick Links</h3>
              <ul class="mt-4 text-slate-500">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/me/">About Me</NuxtLink></li>
                <li><NuxtLink to="/project/">Project</NuxtLink></li>
                <li><NuxtLink to="/contact/">Contact</NuxtLink></li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-lg text-slate-700">Connect</h3>
              <p class="text-sm mt-4 text-slate-500">
                if you need me for business you can send ur email.
              </p>
              <form
              @submit.prevent="addEmail"
                id="mc-embedded-subscribe-form"
               
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
              >
              
                <input
                  id="email"
                  class="mt-3 form-control"
                  type="email"
                  name="EMAIL"
                  v-model="email"
                  placeholder="Enter your email"
                />

                <div style="position: absolute; left: -5000px" aria-hidden="true">

                  <input
                    type="text"
                    name="b_2df9d9dee856197c9cb3e0fac_ac2908ee1e"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <button class="btn w-full btn-primary mt-3">send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <hr class="mt-10 mb-6 dark:border-gray-600" />
        <div class="text-slate-700">
          &copy; 2023. Who cares ? It's
          <a
            href="https://github.com/jouskapram/pramudita"
            target="_blank"
            rel="nofollow"
            class="underline text-blue-500"
            >open source</a
          >
          
        </div>
      </div>
    </footer>
  </template>