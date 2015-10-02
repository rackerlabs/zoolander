'use strict';

module.exports = function (grunt) {
  grunt.registerTask('test', ['jshint:grunt', 'jshint:themes', 'jscs:grunt', 'jscs:themes']);
};
