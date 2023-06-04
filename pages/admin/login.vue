<template>
    <div class="p-3 flex justify-center items-center w-full h-screen dark:bg-gray-700">

        <div
            class=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="py-4 mb-2">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to PramuditaCMS</h5>

            </div>
            <form method="post" @submit.prevent="login" class="space-y-4 md:space-y-6 pb-4 ">
                <label for="email" class="block md:mb-2  text-sm font-medium text-gray-900 dark:text-white">Your
                    email</label>
                <input type="email" id="email" v-model="email" placeholder="name@company.com"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <label for="password" class="block  md:mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    Password</label>
                <input type="password" id="password" v-model="password" placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <button @click="login"
                    class="py-1.5 w-full bg-sky-500 text-white font-semibold text-center text-md hover:bg-sky-600 hover:transition duration-500 rounded-md my-2">Masuk</button>

            </form>


        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()
const email = ref()
const password = ref()
console.log(user)
const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    console.log(data)

    if (error) {
        alert("lu bukan pram sir_-")
        console.log(error)
    }
    if (data) {
        alert("yeay kamu pram^^")
        navigateTo("/admin")
    }
}
</script>

<style lang="scss" scoped></style>