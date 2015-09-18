'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('testing with grunt', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        buildSystem: 'grunt',
        hasServerFiles: true,
        projectName: 'testingApp',
        serverDir: 'server'
      })
      .on('end', done);
  });

  it('should create the test files', function() {
    assert.fileContent([
      ['grunt/test.coffee', /mochaCli/]
    ]);
    assert.file([
      'test/karma.conf.js',
      'test/template/test.spec.template'
    ]);
  });

  it('should configure the server tests accordingly', function() {
    assert.fileContent([
      ['grunt/test.coffee', /\.tmp\/server\/\*\*\/\*.ts/]
    ]);
  });

  it('should create the task to compile the yadda feature files', function() {
    assert.fileContent([
      ['grunt/test.coffee', /template\:/]
    ]);
  });
});
