<template>
    <div class="p-60 h-full w-full justify-center">
        <div class=" flex w-full justify-center object-center" v-for="item in 8" :key="item">
            <img src="'/images/pizzaloader-${activeIndex}.png'" alt="Pizza Loader for da site" v-show="activeIndex === item">
        </div>
        <div class="flex place-items-baseline justify-center bg-white">
            <p class="font-sans font-bold text-2xl h-1/5 text-center">Preparing Ingredients...<br>
            <span class="text-gray-500 font-sans font-bold text-xl h-1/5 text-center">Prepping an ideal set of recipes for your personal taste</span></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue' 
const activeIndex = ref(0)
const interval = ref<ReturnType<typeof setInterval> | null>(null)
onBeforeMount(() => {
  interval.value = setInterval(() => {
    activeIndex.value++
  }, 1000)
})

watch(activeIndex, (value) => {
  if(value >= 8){
    if(interval.value !== null) {
        clearInterval(interval.value)
    }
  }
})
</script>