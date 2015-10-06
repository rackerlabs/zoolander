module.exports = {
  options: {
    config: '.jscsrc'
  },
  grunt: {
    src: ['Gruntfile.js', 'grunt/*.js'],
    fix: true
  },
  themes: {
    src: 'themes/*/js/src/*.js',
    fix: true
  }
};
