/* eslint-disable no-undef */
const { Given, When, Then } = require("cucumber");

const { counterPage } = require("../support/pages/CounterPage");
/**
 * Scenario: showing 0 initially
 */
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
    await testController.expect(counterPage.rootCounter().innerText).eql("-1")
);
