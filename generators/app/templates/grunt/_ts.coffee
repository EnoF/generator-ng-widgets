module.exports = (grunt, options) ->
  ts__all:
    src: [
      'typings/tsd.d.ts'
      'app/core/models/serializable.ts'
      'app/core/models/**/*.ts'
      'app/core/dao/dao.ts'
      'app/core/dao/**/*.ts'
      'app/core/modules/**/*.ts'
      'app/core/widgets/**/src/**/*.ts'
      'app/core/widgets/**/*.ts'
      '!app/core/widgets/**/test/**'
      'app/widgets/**/src/**/*.ts'
      'app/widgets/**/*.ts'
      '!app/widgets/**/test/**'
      'app/app.ts'
    ]
    reference: 'app/reference.ts'
    out: '.tmp/js/build.js'
  ts__seperate:
    src: [
      'typings/tsd.d.ts'
      'test/**/*.ts'
      'app/core/models/**/*.ts'
      'app/core/dao/**/*.ts'
      'app/core/modules/**/*.ts'
      'app/core/widgets/**/src/**/*.ts'
      'app/core/widgets/**/*.ts'
      'app/widgets/**/src/**/*.ts'
      'app/widgets/**/*.ts'
      'app/app.ts'
      '<%= props.serverDir %>/**/*.ts'
    ]
    reference: 'app/reference.ts'
    outDir: '.tmp/js'
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
