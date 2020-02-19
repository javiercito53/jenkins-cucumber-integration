/* eslint-disable no-undef */
const { Given, When, Then } = require("cucumber");

const { counterPage } = require("../../support/pages/CounterPage");
/**
 * Scenario: showing 0 initially
 */
Given(
  "mount counter",
  async () => await testController.navigateTo(counterPage.url())
);
