module.exports = {
  setupFiles: ["<rootDir>/tests/setup.js"],
  roots: ["<rootDir>/src/components", "<rootDir>/tests/components/"],
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
