module.exports = {
  build: {
    options: {
      env: {
        env: 'build'
      },
      partials: 'src/partials',
      templates: 'src/layouts'
    },
    files: [{
      expand: true,
      cwd: 'src/pages',
      src: '*',
      dest: 'build',
      ext: '.html'
    }]
  }
}