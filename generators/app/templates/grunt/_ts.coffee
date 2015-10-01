module.exports = (grunt, options) ->
  browserify__dev:
    src: [
      '.tmp/js/app/**/*.js'
      '.tmp/js/test/unit/**/*.js'
    ]
    dest: '.tmp/js/build.js'
  browserify__dist:
    src: [
      '.tmp/js/app/**/*.js'
    ]
    dest: '.tmp/js/build.js'
  ts:
    src: [
      'typings/tsd.d.ts'
      'test/**/*.ts'
      'app/**/*.ts'
      <% if (props.hasServerFiles) { %>
      '<%= props.serverDir %>/**/*.ts'
      <% } %>
    ]
    reference: 'app/reference.ts'
    outDir: '.tmp/js'
    options:
      module: 'commonjs'
  tslint:
    options:
      configuration: grunt.file.readJSON 'tslint.json'
    src: [
      'app/core/**/*.ts'
      'app/widgets/**/*.ts'
      'app/server/**/*.ts'
    ]
  uglify__app:
    options:
      wrap: 'exports'
    files: [
      src: [
        '.tmp/js/build.js'
      ]
      dest: '.tmp/js/build.min.js'
    ]
  uglify__angular:
    files: [
      src: [
        'app/bower_components/angular/angular.js'
        'app/bower_components/angular-route/angular-route.js'
        'app/bower_components/angular-messages/angular-messages.js'
      ]
      dest: '.tmp/js/angular.min.js'
    ]
