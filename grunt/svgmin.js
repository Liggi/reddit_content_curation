module.exports = {
  options: {
    plugins: [
      { removeViewBox: false }, 
      { removeUselessStrokeAndFill: false }
    ]
  },
  dist: {
    files: [{
      expand: true,
      cwd: 'build/app/images',
      src: ['**/*.svg'],
      dest: 'build/app/images'
    }]
  }
}