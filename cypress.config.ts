import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    supportFile: false,
    baseUrl: 'https://ice-and-fire.softbeehive.com',
  },
})
