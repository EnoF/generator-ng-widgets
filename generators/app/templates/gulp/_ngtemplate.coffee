module.exports = ->
  gulp         = require 'gulp'
  ngHtml2Js    = require 'gulp-ng-html2js'
  minifyHtml   = require 'gulp-minify-html'
  concat       = require 'gulp-concat'
  uglify       = require 'gulp-uglify'

  simplifyFileName = (url) ->
    return url.replace /(([\s\S]*?)\/widgets\/([\s\S]*?)\/src\/)|.html/g, ''
      .replace /.html/, ''

  gulp.src [
    'app/widgets/**/*.html'
    'app/core/widgets/**/*.html'
  ]
  .pipe(minifyHtml(
      empty: true
      spare: true
      quotes: true
    ))
  .pipe(ngHtml2Js(
      moduleName: '<%= projectName %>'
      rename: simplifyFileName
    ))
  .pipe(concat('templates.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('.tmp/js/'))