'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ng-widgets:test', function() {
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

  it('should create the global test definitions', function() {
    assert.file([
      'test/unit/globals.ts'
    ]);
  });

  it('should create a context for the tests', function() {
    assert.file([
      'test/unit/context.ts'
    ]);
  });

  it('should create a StepLibrary', function() {
    assert.file([
      'test/unit/library.ts'
    ]);
  });
});
