module.exports = {
  site: {
    files: [
      {
        expand: true,
        src: ['dist/**'],
        dest: 'docs/',
        options: {
          timestamp: true
        }
      }
    ]
  }
};
