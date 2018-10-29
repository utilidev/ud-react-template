module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  roots: ["<rootDir>/src/components"],
  //watch: true,
  verbose: true,
  bail: true

  //collectCoverage: true,
  // collectCoverageFrom: [
  //   "**/src/components/*.{js,jsx}",
  //   "!**/node_modules/**",
  //   "!**/vendor/**"
  // ],
  //coverageDirectory: "<rootDir>/code-coverage"
};
