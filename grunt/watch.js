module.exports = {
  css: {
    files: ['src/app/stylesheets/**/*'],
    tasks: ['sass'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  images: {
    files: ['src/app/images/**/*', '!src/app/images/**/*.psd'],
    tasks: ['newer:copy', 'newer:svgmin'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  js: {
    files: ['src/app/javascripts/**/*'],
    tasks: ['newer:copy', 'concat', 'uglify'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  fonts: {
    files: ['src/app/fonts/**/*'],
    tasks: ['newer:copy'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  html: {
    files: ['src/**/*.html'],
    tasks: ['zetzer'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  handlebars: {
    files: ['src/app/templates/**/*.hbs'],
    tasks: ['handlebars', 'concat', 'uglify'],
    options: {
      spawn: false,
      livereload: true
    }
  }
}