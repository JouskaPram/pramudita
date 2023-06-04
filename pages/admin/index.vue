<template>
    <div>
        <p>{{ user.email }}</p>
    </div>
</template>

<script setup>
const user = useSupabaseUser()

</script>

<style lang="scss" scoped></style>

<!-- halaman admin dashboard nya yang bang^^ -->