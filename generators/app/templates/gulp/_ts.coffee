module.exports = ->
  gulp         = require 'gulp'
  ts           = require 'gulp-typescript'
  concat       = require 'gulp-concat'
  sourcemaps   = require 'gulp-sourcemaps'

  tsconfig = ts.createProject 'tsconfig.json'

  compileTs = ->
    gulp.src [
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
    <% if (props.hasServerFiles) { %>
      '<%= props.serverDir %>/**/*.ts'
    <% } %>
    ]
    .pipe sourcemaps.init()
    .pipe ts
      sortOutput: true

  tsResults = compileTs()

  tsResults.js
  .pipe gulp.dest '.tmp/js'
  .pipe concat 'build.js'
  .pipe sourcemaps.write()
  .pipe gulp.dest '.tmp/js'
