
<script setup>
import { initModals } from "flowbite"
onMounted(() => {
    initModals()
})
</script>
<template>
    <div class="app-shell">
        <slot />
    </div>
</template>


<style scoped>
.app-shell {
    background-image: url('/noise.webp');
    background-repeat: repeat;
    background-size: 100px;
}
</style>