'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ng-widgets:app with grunt', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ buildSystem: 'grunt' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'Gruntfile.js',
      'package.json',
      '.editorconfig',
      '.jshintrc'
    ]);
  });
});
