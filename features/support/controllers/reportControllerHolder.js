var reporter = require("cucumber-html-reporter");

const reportControllerHolder = {
  /**
   * capture
   * @t => capture the controllator from cucumber-js environment
   * description
   *    - Capture a resolver from cucumber-js environment and asign the test controller
   * return:
   *    - a promise that asign a resolver
   */
  generateReportsHTML: function() {
    console.log("generateReportsHTML");
    var options = {
      theme: "bootstrap",
      jsonFile: "features/reports/report.json",
      output: "features/reports/report.html",
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        Browser: "Chrome  54.0.2840.98",
        Platform: "Windows 10",
        Parallel: "Scenarios",
        Executed: "Remote"
      }
    };
    reporter.generate(options);
  }
};
module.exports = reportControllerHolder;
