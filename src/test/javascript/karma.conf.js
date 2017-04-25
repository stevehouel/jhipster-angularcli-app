'use strict';

// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine', 'intl-shim', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-intl-shim'),
      require('karma-notify-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './spec/entry.ts', watched: false }
    ],
    // list of files to exclude
    exclude: ['e2e/**'],
    preprocessors: {
      './spec/entry.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['dots', 'junit', 'progress', 'coverage-istanbul', 'notify']
              : ['dots', 'junit', 'progress', 'kjhtml', 'notify'],
    junitReporter: {
        outputFile: '../../../../target/test-results/karma/TESTS-results.xml'
    },

    notifyReporter: {
        reportEachFailure: true, // Default: false, will notify on every failed sepc
        reportSuccess: true // Default: true, will notify when a suite was successful
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
