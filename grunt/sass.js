module.exports = {
  build: {
    options: {
      style: 'compressed',
      loadPath: require('node-bourbon').includePaths,
    },
    files: [{
      expand: true,
      cwd: 'src/app/stylesheets',
      src: ['*.{scss,sass}'],
      dest: 'build/app/stylesheets',
      ext: '.css'
    }]
  }
}