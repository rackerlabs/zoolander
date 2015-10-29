module.exports = {
  scripts: {
    files: ['themes/**/*.js'],
    tasks: ['jshint', 'jscs', 'js', 'copy'],
    options: {
      spawn: false
    }
  },
  scss: {
    files: ['themes/**/*.scss'],
    tasks: ['scss', 'copy'],
    options: {
      spawn: false
    }
  }
};
