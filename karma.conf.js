module.exports = function(config) {
  // Example set of browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/platform combos
  var isCI = process.env.CI != null;
  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '55'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'Windows 10',
      version: '54'
    }
  };

  config.set({
    frameworks: ['ng-scenario'],
    files: [
      './test/*.js'
    ],

    sauceLabs: {
        testName: 'Web App Unit Tests',
        startConnect: false,
        port: 4445
    },
    proxies: {
      '/test-page': 'http://localhost:8080/index.html'
    },
    customLaunchers: customLaunchers,
    browsers: isCI ? Object.keys(customLaunchers) : ['Chrome'],
    reporters: ['dots', 'saucelabs'],
    singleRun: isCI ? true : false,

  });
};
