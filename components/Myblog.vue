<template>
    <div>
        <!-- myb blog component -->
        <p>{{ blogs }}</p>
    </div>
</template>

<script setup>
const supabase = useSupabaseAuthClient()
const blogs = ref([])
const loading = ref(true)
const getBlogs = async () => {
    loading.value = true
    const { data, error } = await supabase.from("blog")
        .select()
        .order("id", { ascending: false })
    blogs.value = data

    loading.value = false
    if (error) {
        console.log(error)
    }
}

onMounted(() => {
    getBlogs()
})
</script>
