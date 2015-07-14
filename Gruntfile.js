module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
    data: {
      secret: grunt.file.readJSON('secret.json')
    }
  });

}