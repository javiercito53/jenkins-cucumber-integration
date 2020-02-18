/* eslint-disable no-undef */
const { Given, When, Then } = require("cucumber");
const { counterPage } = require("../support/pages/counter-page");
/**
 * Scenario: showing 0 initially
 */
Given(
  "mount counter",
  async () => await testController.navigateTo(counterPage.url())
);

When(
  "initially",
  async () =>
    await testController.expect(counterPage.rootCounter().innerText).ok()
);

Then(
  "showing 0",
  async () =>
    await testController.expect(counterPage.rootCounter().innerText).eql("0")
);

/**
 * Scenario: clicking - decrements
 */

When(
  "clicking -",
  async () => await testController.click(counterPage.btnDecrease())
);

Then(
  "showing -1",
  async () =>
    await testController.expect(counterPage.rootCounter().innerText).eql("-1")
);

/**
 * Scenario: clicking + increments
 */

When(
  "clicking +",
  async () => await testController.click(counterPage.btnIncrease())
);

Then(
  "showing 1",
  async () =>
    await testController.expect(counterPage.rootCounter().innerText).eql("1")
);
