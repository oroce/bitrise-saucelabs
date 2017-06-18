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
    /*sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '30'
    },
    sl_ios_safari: {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.9',
      version: '7.1'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    }*/
  }

  config.set({

    // The rest of your karma config is here
    // ...
    frameworks: ['ng-scenario'],
    files: [
      './lib/*.js',
      './test/*.js'
    ],

    sauceLabs: {
        testName: 'Web App Unit Tests',
        startConnect: false,
        port: 4445
    },
    //port: 4445,
    //runnerPort: 4445,
    proxies: {
      '/test-page': 'http://localhost:8080/index.html'
    },
    customLaunchers: customLaunchers,
    browsers: isCI ? Object.keys(customLaunchers) : ['Chrome'],
    reporters: ['dots', 'saucelabs'],
    singleRun: isCI ? true : false,

  })
}
