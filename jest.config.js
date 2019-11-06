module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.**"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
}