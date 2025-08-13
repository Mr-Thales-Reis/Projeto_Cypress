const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "e5qbxo",
  e2e: {
    //baseUrl: "http://127.0.0.1:5500",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }
  }
});


