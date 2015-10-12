'use strict';

module.exports = function (grunt) {

  grunt.registerTask('build', 'build a theme', function (themename) {
    var theme = themename === undefined ? grunt.config('buildtheme') : themename;

    if (theme == 'all') {
      grunt.config('themes').forEach(function(item) {
        grunt.task.run(['build:' + item]);
      });
      return;
    }

    var themedir = grunt.config('themedir');

    var isValidTheme = grunt.file.exists(themedir, theme, 'scss', 'build.scss');
    if (!isValidTheme) {
      console.log('theme not found');
      return;
    }

    grunt.task.run(['scss:' + theme, 'js:' + theme, 'copy']);

    });

  grunt.registerTask('scss', 'build scss', function (themename) {

    var path = require('path');
    var theme = themename === undefined ? grunt.config('buildtheme') : themename;
    var themedir = grunt.config('themedir');

    var distDir = 'dist';
    var scssDest = path.join(distDir, theme, 'css', theme + '.css');
    var scssSrc = path.join(themedir, theme, 'scss', 'build.scss');

    var files = {};
    files[scssDest] = scssSrc;
    grunt.config('sass.dist.files', files);
    grunt.config('sass.dist.options.style', 'expanded');
    grunt.config('sass.dist.options.precision', 8);
    grunt.config('sass.dist.options.unix-newlines', true);
    grunt.task.run(['sass:dist']);
  });

  grunt.registerTask('js', 'build js', function (themename) {
    var path = require('path');
    var theme = themename === undefined ? grunt.config('buildtheme') : themename;
    var themedir = grunt.config('themedir');

    // js
    var distDir = 'dist';
    var webpackConfig = require('../webpack.config.js');
    var webpackContext = path.join(themedir, theme, 'js', 'src');
    grunt.config('webpack.options', webpackConfig);
    grunt.config('webpack.' + theme + '.context', webpackContext);
    grunt.config('webpack.' + theme + '.entry', './entry.js');
    grunt.config('webpack.' + theme + '.output.path', path.join(distDir, theme, 'js'));
    grunt.config('webpack.' + theme + '.output.publicPath', 'js/');
    grunt.config('webpack.' + theme + '.output.filename', theme + '.bundle.js');
    grunt.task.run(['webpack']);
  });

};
