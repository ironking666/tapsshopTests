const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zrfb72",
  viewportHeight: 800,
  viewportWidth: 1200,
  e2e: {
    //setupNodeEvents(on, config) {
    baseUrl: "https://tapsshop.pl/",
  },
});
