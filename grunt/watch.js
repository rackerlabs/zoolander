module.exports = {
  scripts: {
    files: ['themes/**/*.js'],
    tasks: ['jshint', 'jscs', 'js'],
    options: {
      spawn: false
    }
  },
  scss: {
    files: ['themes/**/*.scss'],
    tasks: ['scss'],
    options: {
      spawn: false
    }
  }
};
