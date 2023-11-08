<template>
  <Suspense>
    <AsyncHouseInfo :house="house" />
    <template #fallback>
      <HouseLoadingMask class="flex items-center justify-center flex-1" />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent, toRefs } from 'vue'
import { useHouse } from '@/composables/houses'
import HouseInfo from './HouseInfo.vue'
import HouseLoadingMask from './HouseLoadingMask.vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const { id } = toRefs(props)
const { house, loadHouse } = useHouse(id)
const AsyncHouseInfo = defineAsyncComponent(() => {
  // get the house info from the API and return the HouseInfo component
  return loadHouse().then(() => HouseInfo)
})
</script>
