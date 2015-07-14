module.exports = {
  build: {
    files: [
      {
        expand: true, 
        cwd: 'src/app/fonts', 
        src: ['**/*.*'], 
        dest: 'build/app/fonts'
      },
      {
        expand: true, 
        cwd: 'src/app/images', 
        src: ['**/*.*'], 
        dest: 'build/app/images'
      },
      {
        expand: true, 
        cwd: 'src/app/javascripts',
        src: ['**/*.*', '!**/modules/**', '!**/libraries/**', '!**/vendor/**', '!application.js'], 
        dest: 'build/app/javascripts'
      },
    ]
  }
}