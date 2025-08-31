module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    reporters: ['progress'],
  });
};
