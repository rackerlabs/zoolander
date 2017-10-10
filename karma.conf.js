// Karma configuration
// Generated on Sat Apr 01 2017 01:03:22 GMT-0500 (CDT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
      'styleguide/global/global.js',
      'styleguide/derek/global-components/filter-bar/filter-bar.js',
      'styleguide/derek/global-components/tracking/tracking.js',
      'styleguide/derek/global-components/social/social-tracking.js',
      'styleguide/derek/global-components/anchor-scroll/anchor-scroll.js',
      'styleguide/derek/global-components/**/*.spec.js',
      'styleguide/derek/pattern-components/headers/headers.js',
      'styleguide/derek/pattern-components/**/*.spec.js',
    ],

    client: {
      chai: {
        includeStack: true,
      },
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
      },
    },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'styleguide/global/global.js': ['babel'],
      'styleguide/derek/global-components/**/*.js': ['babel'],
      'styleguide/derek/pattern-components/**/*.js': ['babel'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
    // config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
