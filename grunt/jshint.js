module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  grunt: {
    options: {
      jshintrc: 'grunt/.jshintrc'
    },
    src: ['Gruntfile.js', 'package.js', 'grunt/*.js']
  },
  themes: {
    src: 'themes/*/js/src/*.js'
  }
};
