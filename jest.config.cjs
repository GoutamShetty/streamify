/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description jest.config
 */

const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  modulePaths: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  transform: { "\\.[jt]sx?$": "babel-jest" },
  resetMocks: false,
};
