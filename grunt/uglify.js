module.exports = {
  options: {
    sourceMap: true,
    sourceMapIn: function(path) { 
      if(path === "src/app/javascripts/application.js") {
        return false;
      } else {
        return path.replace(/.js/,".js.map");
      }
    } 
  },
  build: {
    files: [{
      expand: true,
      cwd: 'build/app/javascripts',
      src: ['**/*.js'],
      dest: 'build/app/javascripts'
    },
    {
      'build/app/javascripts/application.js' : ['src/app/javascripts/application.js']
    }]
  }
}