'use strict';

module.exports = function (grunt) {
  // measures the time each task takes
  require('time-grunt')(grunt);
  // load grunt config
  require('load-grunt-config')(grunt, {
    data: {
      themedir: './themes',
      buildtheme: 'all',
      themes: ['global', 'derek'],
      version: '1.1',
      cdn_url: 'https://brand.rax.io' // fixme: does not work as cname with cloud files
    }
  });
};
