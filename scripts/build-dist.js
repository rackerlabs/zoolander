var _ = require('lodash');
var webpack = require('webpack');
var sass = require('node-sass');
var webpackConf = require('../webpack.config');
var fs = require('fs');
var actions = [
  'mashing',
  'rolling',
  'crunching',
  'pounding',
  'polishing',
  'plastering',
  'weaving'
];

var results = [
  'into a masterpiece',
  'for speed',
  'for science',
  'and putting a bow on it',
  'and hoping it works this time',
  '...safely',
  'for a better future'
]

var randomMessage = function (thing) {
  return [
    actions[_.random(0, actions.length - 1)],
    thing,
    results[_.random(0, results.length - 1)]
  ].join(' ');
};

var themesDir = __dirname + '/../themes';
fs.readdir(themesDir, function (err, dirs) {
  _.each(dirs, function (dir) {
    console.log(randomMessage(dir));
    var themeDir = themesDir + '/' + dir;
    var path = {
      css: themeDir + '/scss/',
      js: themeDir + '/js/src/',
    };
    var distPath = __dirname + '/../dist/' + dir;
    var cssPath = distPath + '/css/' + dir + '.css';
    var jsPath = distPath + '/js/';

    webpackConf.entry = path.js + 'entry.js';
    webpackConf.output = {
      path: jsPath,
      filename: dir + '.bundle.js'
    };

    var errHandler = function (err) {
      if (err) {
        console.log(err);
      }
      return !!err;
    }

    var sassCallback = function (err, result) {
      if(!errHandler(err)) {
        fs.writeFile(cssPath, result.css, errHandler);
      }
    };

    var webpackCallback = function (err, results) {
      errHandler(err);
    };

    sass.render({
      file: path.css + 'build.scss',
      includePaths: [path.css],
    }, sassCallback);
    webpack(webpackConf, webpackCallback);
  });
});
