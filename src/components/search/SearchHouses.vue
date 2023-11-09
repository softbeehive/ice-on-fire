<template>
  <section>
    <ul
      v-if="foundHouses"
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    >
      <li
        v-for="house in houses"
        :key="house.name"
        class="col-span-1 flex rounded-md shadow-sm bg-primary-container dark:bg-primary-dark text-on-primary-container dark:text-on-primary-dark"
      >
        <a :href="makeHouseUrl(house)" class="block w-full">
          <div class="flex flex-1 justify-between rounded-md">
            <div class="flex-1 px-4 py-3 text-sm">
              <div class="text-lg font-semibold">{{ house.name }}</div>
              <p v-if="house.founded" class="pt-2">Since {{ house.founded }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <SearchError v-if="showJonSnow" />
  </section>
</template>

<script setup lang="ts">
import type { House } from '@/composables/houses'
import { computed, toRefs } from 'vue'
import SearchError from './SearchError.vue'

const props = defineProps<{ houses: House[] | undefined }>()
const { houses } = toRefs(props)

const foundHouses = computed(() => houses.value && houses.value.length > 0)
const showJonSnow = computed(() => houses.value && houses.value.length === 0)

const makeHouseUrl = (house: House) => {
  const houseUrl = house.url
  const houseId = houseUrl.split('/').filter(Boolean).pop()

  const urlAsArray = ['/houses', houseId].filter(Boolean)
  const url = urlAsArray.join('/')
  return url
}
</script>
