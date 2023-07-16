const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 500000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    waitForAnimations: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
