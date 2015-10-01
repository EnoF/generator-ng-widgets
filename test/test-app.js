'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ng-widgets:app with grunt', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        buildSystem: 'grunt',
        projectName: 'testingApp'
      })
      .on('end', done);
  });

  it('creates files', function() {
    assert.file([
      'bower.json',
      'Gruntfile.js',
      'package.json',
      'tslint.json',
      '.editorconfig',
    ]);
  });

  it('creates the grunt config files', function() {
    assert.file([
      'grunt/ts-tasks.coffee'
    ]);
    assert.fileContent([
      ['grunt/ngtemplate.coffee', 'module: \'testing-app\'']
    ]);
  });

  it('creates the common web files', function () {
    assert.fileContent([
      ['app/index.html', '<title>testingApp</title>'],
      ['app/index.html', 'ng-app="testing-app"'],
      ['app/index.html', '<testing-app></testing-app>'],
      ['app/app.ts', 'angular.module(\'testing-app\', [\'testing-app.testing-app\'])'],
      ['app/widgets/testing-app/testing-app.ts', 'angular.module(\'testing-app.testing-app\', [])'],
      ['app/widgets/testing-app/src/testing-app-vm.ts', 'export class TestingAppVM'],
      ['app/widgets/testing-app/src/testing-app.ts', 'export function testingApp()'],
      ['app/widgets/testing-app/src/testing-app.html', '<h1>testing-app</h1>'],
      ['app/widgets/testing-app/test/definitions/testing-app.step.ts', 'module testingAppTest'],
      ['app/widgets/testing-app/test/features/loadApp.feature', 'Given I initialize widget "testing-app"']
    ]);
  });
});

describe('ng-widgets:app with gulp', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .withPrompts({
        buildSystem: 'gulp',
        projectName: 'testingApp'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'gulpfile.js',
      'package.json',
      '.editorconfig'
    ]);
  });

  it('creates the gulp config files', function () {
    assert.file([
      'gulp/ts.coffee'
    ])
  });
});
