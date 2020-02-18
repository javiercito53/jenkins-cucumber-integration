/* eslint-disable no-undef */
/**
 * Initialize Variables
 */
const fs = require("fs");
const createTestCafe = require("testcafe");
const testControllerHolder = require("../support/testControllerHolder");
const {
  AfterAll,
  setDefaultTimeout,
  Before,
  After,
  Status
} = require("cucumber");
const errorHandling = require("../support/errorHandling");
const TIMEOUT = 20000;

let isTestCafeError = false;
let attachScreenshotToReport = null;
let cafeRunner = null;
let n = 0;

//set default time out
setDefaultTimeout(TIMEOUT);
/**
 * createTestFile
 * description
 *    - creates the test file and writes the code for run the test environment
 */
function createTestFile() {
  fs.writeFileSync(
    "test.js",
    'import errorHandling from "./features/support/errorHandling.js";\n' +
      'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +
      'fixture("fixture")\n' +
      "test\n" +
      '("test", testControllerHolder.capture)'
  );
}

/**
 * runTest
 * description
 *    - runs the all test from step_definitions folder and creates the screenshots for reports
 */
function runTest(iteration, browser) {
  createTestCafe("localhost", 1338 + iteration, 1339 + iteration)
    .then(function(tc) {
      cafeRunner = tc;
      const runner = tc.createRunner();
      return runner
        .src("./test.js")
        .screenshots("reports/screenshots/", true)
        .browsers(browser)
        .run()
        .catch(function(error) {
          console.error(error);
        });
    })
    .then(function(report) {console.log("report",report)});
}

/**
 * Before
 * description
 *    - create the test environment and runs the test
 */
Before(function() {
  runTest(n, this.setBrowser());
  createTestFile();
  n += 2;
  return this.waitForTestController.then(function(testController) {
    return testController.maximizeWindow();
  });
});

/**
 * After
 * description
 *    - delete the test environment and runs the test
 */
After(function() {
  fs.unlinkSync("test.js");
  testControllerHolder.free();
});

/**
 * After
 * description
 *    - If any test fails, generate the reports
 */
After(async function(testCase) {
  const world = this;
  //checks if the test failed
  if (testCase.result.status === Status.FAILED) {
    //   console.log("a test failed")
    //   console.log(testCase.result)
    isTestCafeError = true;
    attachScreenshotToReport = world.attachScreenshotToReport;
    errorHandling.addErrorToController();
    await errorHandling.ifErrorTakeScreenshot(testController);
  }
});

/**
 * AfterAll
 * description
 *    - If any test fails, generate the reports
 */
AfterAll(function() {
  let intervalId = null;

  function waitForTestCafe() {
    intervalId = setInterval(checkLastResponse, 500);
  }

  function checkLastResponse() {
    if (
      testController.testRun.lastDriverStatusResponse ===
      "test-done-confirmation"
    ) {
      cafeRunner.close();
      process.exit();
      clearInterval(intervalId);
    }
  }

  waitForTestCafe();
});

const getIsTestCafeError = () => isTestCafeError;
const getAttachScreenshotToReport = path => attachScreenshotToReport(path);

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;
