/* eslint-disable no-undef */
/**
 * Initialize Variables
 */
const testcafe = require("testcafe");
const hooks = require("./hooks");

exports.addErrorToController = function() {
  console.log("addErrorToController");
  testController.executionChain.catch(function(result) {
    console.log("testController.executionChain");
    const errAdapter = new testcafe.embeddingUtils.TestRunErrorFormattableAdapter(
      result,
      {
        testRunPhase: testController.testRun.phase,
        userAgent:
          testController.testRun.browserConnection.browserInfo.userAgent
      }
    );
    return testController.testRun.errs.push(errAdapter);
  });
};

exports.ifErrorTakeScreenshot = function(resolvedTestController) {
  console.log(hooks.getIsTestCafeError());
  console.log(testController.testRun.opts.takeScreenshotsOnFails);
  console.log("ifErrorTakeScreenshot");
  if (
    hooks.getIsTestCafeError() === true &&
    testController.testRun.opts.takeScreenshotsOnFails === true
  ) {
    if (
      process.argv.includes("--format") ||
      process.argv.includes("-f") ||
      process.argv.includes("--format-options")
    ) {
      resolvedTestController.executionChain._state = "fulfilled";
      return resolvedTestController.takeScreenshot().then(function(path) {
        return hooks.getAttachScreenshotToReport(path);
      });
    } else {
      return resolvedTestController.takeScreenshot();
    }
  }
};
