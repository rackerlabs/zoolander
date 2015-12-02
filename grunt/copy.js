module.exports = {
  site: {
    files: [
      {
        expand: true,
        src: ['dist/**'],
        dest: 'docs/_site/',
        options: {
          timestamp: true
        }
      }
    ]
  }
};
