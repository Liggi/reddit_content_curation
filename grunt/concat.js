module.exports = {
  build: {
    options: {
      sourceMap: true
    },
    files: {
      'build/app/javascripts/app.modules.js' : ['src/app/javascripts/modules/*.js'],
      'build/app/javascripts/app.vendor.js' : ['src/app/javascripts/vendor/*.js'],
      'build/app/javascripts/app.libraries.js' : ['src/app/javascripts/libraries/*.js'],
      'build/app/javascripts/templates.js' : ['build/tmp/templates.js']
    }
  }
}