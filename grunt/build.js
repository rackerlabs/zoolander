module.exports = function(grunt){

    grunt.registerTask('build', 'build a theme', function(theme){
        var path = require('path');
        var theme = theme == undefined ? grunt.config('buildtheme') : theme;
        var themedir = grunt.config('themedir');

        var isValidTheme = grunt.file.exists(themedir, theme, 'scss', 'build.scss');
        if (!isValidTheme) {
            console.log('theme not found');
            return;
        }
        var distDir = 'dist';
        var scssDest = path.join(distDir, theme, 'scss', 'css', theme + '.css');
        var scssSrc = path.join(themedir, theme, 'scss', 'build.scss');

        var files = {};
        files[scssDest] = scssSrc;
        grunt.config('sass.dist.files', files);
        grunt.config('sass.dist.options.style', 'expanded');
        grunt.config('sass.dist.options.precision', 8);
        grunt.config('sass.dist.options.unix-newlines', true);
        // js
        var webpackConfig = require("../webpack.config.js");
        var webpackContext = path.join(themedir, theme, 'src');
        grunt.config('webpack.options', webpackConfig);
        grunt.config('webpack.' + theme + '.context', webpackContext);
        grunt.config('webpack.' + theme + '.entry', './entry.js');
        grunt.config('webpack.' + theme + '.output.path', path.join(distDir, theme, 'js'));
        grunt.config('webpack.' + theme + '.output.publicPath', 'js/');
        grunt.config('webpack.' + theme + '.output.filename', theme + '.bundle.js');
        grunt.task.run(['sass:dist', 'webpack']);

    });

};
