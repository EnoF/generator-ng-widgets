'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('gulp server folder', function () {
  it('sets the file under the server directory by default', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        buildSystem: 'gulp',
        serverDir: 'server'
      })
      .on('end', function () {
        assert.fileContent([
          ['gulp/ts.coffee', /'server\/\*\*\/\*.ts'/]
        ]);
        done();
      });
  });

  it('sets the file under a custom provided directory', function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        buildSystem: 'gulp',
        serverDir: 'app/server'
      })
      .on('end', function () {
        assert.fileContent([
          ['gulp/ts.coffee', /'app\/server\/\*\*\/\*.ts'/]
        ]);
        done();
      });
  });
});