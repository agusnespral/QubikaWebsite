const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qubika.com/', 
    hideXHRInCommandLog: true
  },
});
