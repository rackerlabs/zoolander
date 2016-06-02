var walk = require('walk');
var fs = require('fs-extra');
var path = require('path');
var _ = require('lodash');
var files = [];

var distPath = path.resolve(__dirname + '/../dist');

// Walker options
var walker = walk.walk(distPath, { followLinks: false });

walker.on('file', function(root, stat, next) {
  // Add this file to the list of files
  if (/.html$/.test(stat.name)) {
    files.push(path.resolve(root + '/' + stat.name));
  }
  next();
});

walker.on('end', function() {
  var backstopConfPath = __dirname + '/../backstop.json';
  fs.readJson(backstopConfPath, function (err, file) {
    if (err) {
      console.log('unable to read backstop config');
      return;
    }
    file.scenarios = _.map(files, function (fileName) {
      var url =  fileName.replace(distPath, '');
      return {
        label: url,
        delay: 500,
        url: 'http://localhost:9000' + url,
      };
    });

    fs.writeJson(backstopConfPath, file, function (err) {
      if (!err) {
        console.log('Backstop Config Updated Successfully');
      } else {
        console.log('Backstop Config Updated Unsuccessfully');
      }
    });
  });

});
