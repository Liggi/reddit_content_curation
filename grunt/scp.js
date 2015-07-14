module.exports = {
  options: {
    host: '<%= secret.staging.host %>',
    username: '<%= secret.staging.username %>',
    password: '<%= secret.staging.password %>'
  },
  staging: {
    files: [{
      cwd: '<%= secret.staging.localPath %>',
      src: ['**/*', '!**/*.map'],
      dest: '<%= secret.staging.deployPath %>'
    }]
  }
}