<template>
  <div>
    <header>
      <SiteHeader />
    </header>
    <body>
      <template v-if="view === 'PickerView'">
        <PickerView/>
      </template>
      <template v-if="confirmed && view === 'LoadingView'">
        <LoadingView/>
      </template>
    </body>
    <footer>
      <SiteFooter></SiteFooter>
    </footer>
  </div>
</template>

<script setup lang="ts">
import PickerView from '@/components/PickerView.vue'
import LoadingView from '@/components/LoadingView.vue'
import confirmed from '@/components/LoadingView.vue'
import { ref } from 'vue'
type AllowedView = 'PickerView' | 'LoadingView' | 'ListView' | 'ItemView'

const view = ref<AllowedView>('PickerView') // This should be updated based on the imported variable
// watch(confirmed, (value) =>{
//   if(value){
//     view.value = 'LoadingView'
//   }
// })
</script>