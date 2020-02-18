/* eslint-disable no-undef */
const { Selector } = require("testcafe");

/**
 * select
 * @selector => html id element
 * description
 *    - find element by html id
 * return:
 *    - Selector instance of the object by html id
 */
function select(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}

exports.counterPage = {
  url: () => "http://localhost/",
  rootCounter: () => select("#rootCounter"),
  btnDecrease: () => select("#btnDecrease"),
  btnIncrease: () => select("#btnIncrease")
};
