/* eslint-disable no-undef */
const { setWorldConstructor } = require("cucumber");
const base64Img = require("base64-img");


const testControllerHolder = require("../controllers/testControllerHolder");

//set cucumber and testcafe environments
setWorldConstructor(function({ attach, parameters }) {
  this.waitForTestController = testControllerHolder
    .get()
    .then(tc => (testController = tc));

  this.attach = attach;

  //set chrome for default if not exist a browser
  this.setBrowser = function() {
    if (parameters.browser === undefined) return "chrome";
    return parameters.browser;
  };

  /**
   * doesn't work
   */
  this.addScreenshotToReport = function() {
    console.log("addScreenshotToReport", addScreenshotToReport);
    if (
      process.argv.includes("--format") ||
      process.argv.includes("-f") ||
      process.argv.includes("--format-options")
    ) {
      testController
        .takeScreenshot()
        .then(function(screenshotPath) {
          const imgInBase64 = base64Img.base64Sync(screenshotPath);
          const imageConvertForCuc = imgInBase64.substring(
            imgInBase64.indexOf(",") + 1
          );
          return attach(imageConvertForCuc, "image/png");
        })
        .catch(function(error) {
          console.warn("The screenshot was not attached to the report");
        });
    } else {
      return new Promise(resolve => {
        resolve(null);
      });
    }
  };
  /**
   * doesn't work
   */
  this.attachScreenshotToReport = function(pathToScreenshot) {
    console.log("attachScreenshotToReport", addScreenshotToReport);
    const imgInBase64 = base64Img.base64Sync(pathToScreenshot);
    const imageConvertForCuc = imgInBase64.substring(
      imgInBase64.indexOf(",") + 1
    );
    return attach(imageConvertForCuc, "image/png");
  };
});
