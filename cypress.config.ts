import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: ['src/**/*.e2e.ts'],
  },
})
