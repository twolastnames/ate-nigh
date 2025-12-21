import { defineConfig } from 'cypress'
 
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: './**/*.cy.tsx',
  },
})
