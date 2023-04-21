<template>
    <div class="p-6 rounded-lg bg-gray-100 border border-gray-200 ">
      <div class="inline-flex items-center justify-center rounded-full mb-4">
        <slot></slot>
      </div>
      <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
        {{ title }}
      </h2>
      <p class="leading-relaxed text-base text-gray-400">
        {{ description }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    }
  }
  </script>