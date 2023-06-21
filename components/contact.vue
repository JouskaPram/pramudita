<template>
  <div>
    <div v-if="!msg" class="bg-blue-100 border-t border-b border-blue-500 text-slate-700 mb-3 px-4 py-3" role="alert">
      <p class="font-bold">Pesan Terkirim</p>
      <p class="text-sm">Pesan Terkirim ke Pramudita, Terima kasih sudah menghubungi saya^^</p>
    </div>
    <form ref="contactForm" name="contact" class=" flex flex-col w-full" @submit.prevent="addMsg">
      <div class="flex flex-col md:flex-row gap-2 ">
        <div class="w-full">
          <label for="" class="text-slate-600 font-semibold text-base  text-left my-3">Name</label>
          <input v-model="nama" class="form-control mt-2" type="text" name="name" required />
        </div>
        <div class="w-full">
          <label for="" class="text-slate-600 font-semibold text-base  text-left my-3">Email</label>
          <input v-model="email" class="form-control mt-2" type="email" name="email" required />
        </div>
      </div>
      <lab el for="" class="text-slate-600 font-semibold text-base  text-left my-3">Message</lab>
      <textarea v-model="message" name="message" class="form-control mb-4 h-32"></textarea>
      <button class="btn btn-primary inline-flex justify-center" type="submit">
        submit
        <!-- <template > Submit </template> -->

      </button>
      <p v-if="message" class="bg-gray-800 text-gray-100 py-2 px-4 text-center mt-2 rounded">
        {{ message }}
      </p>
    </form>

  </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const message = ref()
const nama = ref()
const msg = ref(true)
const email = ref()
const addMsg = async () => {
  msg.value = true
  const { data, error } = await supabase
    .from("pesan")
    .insert({
      nama: nama.value,
      pesan: message.value,
      email: email.value
    })
  msg.value = false
  if (error) {
    console.log(error)
  }

}
</script>

<style lang="scss" scoped></style>