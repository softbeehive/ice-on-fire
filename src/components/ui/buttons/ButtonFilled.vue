<template>
  <button
    class="h-10 rounded-[100px] px-6 font-medium bg-primary dark:bg-primary-dark text-on-primary dark:text-on-primary-dark disabled:pointer-events-none disabled:bg-on-surface/[.12] dark:disabled:bg-on-surface-dark/[.12] disabled:text-on-surface/[.38] dark:disabled:text-on-surface-dark/[.38] hover:bg-primary/[.92] dark:hover:bg-primary-dark/[.92] focus:bg-primary/[.88] dark:focus:bg-primary-dark/[.88] active:bg-primary/[.88] dark:active:bg-primary-dark/[.88]"
  >
    <slot />
  </button>
</template>
