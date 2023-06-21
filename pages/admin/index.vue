<template>
    <div>
        <!-- <p>{{ user.email }}</p> -->
        <button @click="keluar" class="py-2 px-3 bg-sky-600 rounded-md text-white font-semibold">logout</button>
    </div>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseAuthClient()
const keluar = async () => {
    const { user, data, error } = await supabase.auth.signOut()
    alert("berhasil keluar")
    console.log(user)
    if (error) {
        console.log(error)
    }
}
</script>

<style lang="scss" scoped></style>

<!-- halaman admin dashboard nya yang bang^^ -->