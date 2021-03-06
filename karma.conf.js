// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      'jasmine-matchers',
      '@angular/cli'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-jasmine-matchers'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require("karma-coverage"),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [
        'html',
        'lcovonly'
      ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: [
      'dots',
      'progress',
      'kjhtml'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeKarma: {
        base: "ChromeHeadless",
        flags: [
          "--lang=de-DE",
          "--disable-gpu",
          "--no-sandbox",
          "--disable-web-security"
        ]
      }
    }
  });
};
