
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");

exports.config = {
  allScriptsTimeout: 20000,
  specs: [
    './e2e/account/*.spec.ts',
    './e2e/admin/*.spec.ts',
    './e2e/entities/*.spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'phantomjs.binary.path': require('phantomjs-prebuilt').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: ''
    });
  },
  onPrepare() {
    browser.driver.manage().window().setSize(1280, 1024);
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
        dest: "target/reports/e2e/screenshots"
    }));
  },
  useAllAngular2AppRoots: true
};
