<template>
  <input
    ref="input"
    class="h-14 flex flex-col justify-center items-start bg-transparent rounded appearance-none p-4 border-0 ring-1 ring-inset ring-outline dark:ring-outline-dark focus:ring-2 focus:ring-inset focus:ring-primary dark:focus:ring-primary-dark caret-primary dark:caret-primary-dark"
    :type="type"
    :value="modelValue"
    @input="inputFn"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const input = ref(null) as Ref<HTMLInputElement | null>

defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

defineExpose({
  focus: () => input.value?.focus(),
  blur: () => input.value?.blur(),
})

const emit = defineEmits(['update:modelValue'])

const inputFn = (e: Event) => {
  const inputQuery = (e.target as HTMLInputElement).value
  emit('update:modelValue', inputQuery)
}
</script>

<style scoped>
input::-webkit-date-and-time-value {
  text-align: left;
}
</style>
