
<script setup>
import { initModals } from "flowbite"
onMounted(() => {
    initModals()
})
</script>
<template>
    <div>
        <slot />
    </div>
</template>


<style lang="scss" scoped></style>