<template>
  <div class="flex flex-col md:flex-row items-center gap-6">
    <div class="text-xl font-semibold p-4 text-error-40 dark:text-error-80">
      You know nothing,<br />
      Jon Snow!
    </div>
    <div>
      <img
        class="rounded-full"
        :src="jonSnow.src"
        alt="Jon Snow"
        width="480"
        height="300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import jonSnow from '@/assets/images/jon_snow.jpg'
</script>
