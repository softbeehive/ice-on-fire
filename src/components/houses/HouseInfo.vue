<template>
  <div class="flex flex-col gap-4 justify-center">
    <div v-if="house?.name" class="font-bold text-2xl">{{ house?.name }}</div>
    <div
      v-for="([fieldName = '', fieldValue], i) in fields"
      :key="fieldName + i"
    >
      <div class="font-semibold">{{ fieldName }}</div>
      <div>{{ fieldValue }}</div>
    </div>
    <div v-if="titles?.length">
      <div class="font-semibold">Titles</div>
      <ul class="list-decimal">
        <li v-for="title in titles" :key="title">
          {{ title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { House } from '@/composables/houses'

const props = defineProps<{ house: House | undefined }>()
const { house } = toRefs(props)

const titles = computed(() => house.value?.titles.filter(Boolean))
const fields = computed(() => {
  const list = [
    ['Founded', house.value?.founded],
    ['Words', house.value?.words],
    ['Coat of arms', house.value?.coatOfArms],
    ['Region', house.value?.region],
  ]
  return list.filter(([, value]) => value)
})
</script>
