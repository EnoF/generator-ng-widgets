'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('server files are optional', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        buildSystem: 'grunt',
        hasServerFiles: false,
        serverDir: 'server'
      })
      .on('end', done);
  });

  it('should not search for server files to compile', function() {
    assert.noFileContent([
      ['grunt/ts.coffee', /'server\/\*\*\/\*.ts'/]
    ]);
  });
});
