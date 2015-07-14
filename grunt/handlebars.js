module.exports = {
  default: {
    options: {
      namespace: 'RED.templates',
      processName: function(filePath) {
          return filePath.replace(/src\/app\/templates\//, '').replace(/\.hbs$/, '');
      }
    },

    files: {
      'build/tmp/templates.js' : [ 'src/app/templates/*.hbs']
    }
  }
}