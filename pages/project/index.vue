<template>
    <div id="main" class="">
        <Navbar />
        <section class="pt-24   pb-10">
            <h4 class="text-center font-semibold text-blue-500 text-3xl ">Lets See My Project</h4>
            <p class="text-center font-medium text-base text-slate-700">These are some of the projects I've made</p>
            <div class="container mx-auto my-20 px-6">

                <projectcard />
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import projectcard from '~/components/projectcard.vue';

</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

#main {
    font-family: 'Inter', sans-serif;
    background: url(../../public/noise.webp);

    /* background-color: red; */
    background-repeat: repeat;
    background-size: 100px;
    top: 0;
    left: 0;
}
</style>