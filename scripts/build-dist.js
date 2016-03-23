var _ = require('lodash');
var harp = require('harp');
var webpack = require('webpack');
var webpackConf = require('../webpack.config');
var fs = require('fs-extra');
var async = require('async');
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

var webpackCallback = function (err, results) {
  if (err) {
    console.log(err);
    return;
  }

  harp.compile(__dirname + '/../styleguide', '/tmp/styleguide', harpCallback);
};

var harpCallback = function (err, results) {
  if (err) {
    console.log(err);
    return;
  }

  var copyCompiledTheme  = function (theme, callback) {
    console.log(randomMessage(theme));
    var themeDir = themesDir + '/' + theme;
    var cssPath = themeDir + '/scss/build.css';
    var distPath = __dirname + '/../dist/css/' + theme + '.css';
    fs.copy(cssPath, distPath, callback);
  }
  var themesDir = '/tmp/styleguide/themes';
  var themes = fs.readdirSync(themesDir);
  _.pull(themes, 'bower_components');
  async.each(themes, copyCompiledTheme, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Copying Fonts');
    fs.copy(__dirname + '/../styleguide/fonts', __dirname + '/../dist/fonts', function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Distribution Successfully Created');
    });
  });
};
webpack(webpackConf, webpackCallback);
