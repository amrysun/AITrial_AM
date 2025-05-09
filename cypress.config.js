const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://intranet.rysun.com", // fallback
    env: {
      intranetUrl: "https://intranet.rysun.com"
    },
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: false,
  },
});
