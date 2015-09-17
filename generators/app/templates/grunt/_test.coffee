module.exports = (grunt, config) ->
  fs = require('fs')

  addFeatures = (baseFolder, features) ->
    try
      featureFiles = fs.readdirSync baseFolder + '/test/features/'
      featureFiles.forEach (feature) ->
        @push fs.readFileSync(baseFolder + '/test/features/' + feature, encoding: 'utf8')
      , features
    catch e
      console.warn baseFolder + ' does not contain any tests'

  addWidgetFeatures = (baseFolder, features) ->
    try
      widgets = fs.readdirSync baseFolder
      widgets.forEach (widget) ->
        addFeatures baseFolder + widget, features
    catch e
      console.warn baseFolder + ' does not exist'

  karma__unit:
    configFile: 'test/karma.conf.js'
    singleRun: true
  karma__unitAuto:
    configFile: 'test/karma.conf.js'
    background: true
  <% if (props.hasServerFiles) { %>
  mochaCli:
    options:
      reporter: 'mocha-better-spec-reporter'
      files: [
        '.tmp/<%= props.serverDir %>/**/*.ts'
      ]
  <% } %>
  template:
    options:
      data: ->
        features = []
        addWidgetFeatures 'app/widgets/', features
        addWidgetFeatures 'app/core/widgets/', features
        features: features
        module: '<%= projectName %>'
    src: 'test/template/test.spec.template'
    dest: '.tmp/test.spec.js'
