<template>
  <form
    class="flex flex-col flex-grow h-full"
    data-test="search-houses-form"
    @submit.prevent="handleSubmit"
  >
    <div
      class="flex flex-col flex-grow-0 flex-shrink-0 justify-center items-center gap-3 py-4 sm:flex-row"
    >
      <TextFieldOutlined
        v-model="query"
        class="outline-none w-full sm:w-auto"
        placeholder="What house?"
        minlength="1"
        required
        data-test="search-houses-input"
      />
      <ButtonFilled
        class="w-full sm:w-40 h-12"
        type="submit"
        :disabled="loading"
        data-test="search-houses-submit"
      >
        {{ buttonText }}
      </ButtonFilled>
    </div>
    <div class="flex flex-grow justify-center items-center py-10">
      <SearchLoadingMask v-if="loading" />
      <SearchHouses v-else :houses="houses" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHouses } from '@/composables/houses'

import ButtonFilled from '../ui/buttons/ButtonFilled.vue'
import TextFieldOutlined from '../ui/text-fields/TextFieldOutlined.vue'
import SearchLoadingMask from './SearchLoadingMask.vue'
import SearchHouses from './SearchHouses.vue'

const query = ref('')
const { houses, loading, loadHouses } = useHouses(query)
const buttonText = computed(() => (loading.value ? 'Asking ...' : 'Ask Elders'))

const handleSubmit = () => {
  loadHouses()
}
</script>
