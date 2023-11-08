<template>
  <footer>
    <img
      :src="peaksLight.src"
      class="w-full h-24 md:max-h-44 md:h-auto dark:hidden"
      width="1440"
      height="270"
    />
    <img
      :src="peaksDark.src"
      class="w-full h-24 md:max-h-44 md:h-auto hidden dark:block"
      width="1440"
      height="270"
    />
    <div
      class="bg-secondary-container dark:bg-secondary-dark text-on-secondary-container dark:text-on-secondary-dark"
    >
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 py-4 gap-4">
          <div>{{ info }}</div>
          <div class="sm:text-right">
            <a
              href="https://github.com/softbeehive"
              class="hover:underline hover:underline-offset-2"
            >
              {{ author }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import peaksLight from '@/assets/images/peaks-light.svg'
import peaksDark from '@/assets/images/peaks-dark.svg'

const info = computed(() => {
  return 'Winter is coming...'
})

const author = computed(() => {
  return 'Made by Oleksandr Bystrikov'
})
</script>
