module.exports = (grunt, options) ->
  sources = [
    'app/widgets/**/*.html'
    'app/core/widgets/**/*.html'
  ]
  simplifyFileName = (url) ->
    return url.replace /(([\s\S]*?)\/widgets\/([\s\S]*?)\/src\/)|.html/g, ''
        .replace /.html/, ''
  ngtemplates__dev:
    src: sources
    dest: '.tmp/js/templates.js'
    options:
      module: '<%= projectName %>'
      url: simplifyFileName
  ngtemplates__dist:
    src: sources
    dest: '.tmp/js/templates.min.js'
    options:
      module: '<%= projectName %>'
      htmlmin:
        collapseBooleanAttributes: true
        collapseWhitespace: true
        removeAttributeQuotes: true
        removeComments: true
        removeEmptyAttributes: true
        removeRedundantAttributes: true
        removeScriptTypeAttributes: true
        removeStyleLinkTypeAttributes: true
      url: simplifyFileName
