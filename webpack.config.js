var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var webpack = require('webpack');

var themesDir = __dirname + '/styleguide/themes';
var dirs = fs.readdirSync(themesDir);
_.pull(dirs, 'bower_components');
var entry = _.transform(dirs, function (obj, theme) {
  return obj[theme] = [themesDir + '/' + theme + '/js/src/entry.js'];
}, {});

module.exports = {
    debug: true,
    cache: false,
    entry: entry,
    output: {
      path: path.join(__dirname, 'styleguide', 'dist', 'js'),
      filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            // required to write 'require('./style.css')'
            { test: /\.css$/,    loader: 'style-loader!css-loader' },

            // required for bootstrap icons
            { test: /\.woff$/,   loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
            { test: /\.ttf$/,    loader: 'file-loader?prefix=font/' },
            { test: /\.eot$/,    loader: 'file-loader?prefix=font/' },
            { test: /\.svg$/,    loader: 'file-loader?prefix=font/' },

            // required for react jsx
            //{ test: /\.js$/,    loader: 'jsx-loader' },
            //{ test: /\.jsx$/,   loader: 'jsx-loader?insertPragma=React.DOM' },
        ]
    },
    resolve: {
        alias: {
            // Bind version of jquery
            jquery: 'jquery',

            // Bind version of jquery-ui
            //'jquery-ui': 'jquery-ui-1.10.3',

            // jquery-ui doesn't contain a index file
            // bind module to the complete module
            //'jquery-ui-1.10.3$': 'jquery-ui-1.10.3/ui/jquery-ui.js',
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Automtically detect jQuery and $ as free var in modules
            // and inject the jquery library
            // This is required by many jquery plugins
            jQuery: 'jquery',
            $: 'jquery'
        })
    ]
};
