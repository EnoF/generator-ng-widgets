var gulpHelpers = {
  setupGulp: function () {
    this.fs.copy(
      this.templatePath('_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.npmInstall([
      'gulp',
      'gulp-angular-templatecache',
      'gulp-clean',
      'gulp-compressor',
      'gulp-concat',
      'gulp-cssmin',
      'gulp-karma',
      'gulp-less',
      'gulp-live-server',
      'gulp-mocha',
      'gulp-task-loader',
      'gulp-typescript',
      'gulp-tslint',
      'gulp-uglify',
      'karma',
      'karma-chai',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sinon-chai',
      'mocha',
      'phantomjs',
      'should',
      'sinon',
      'tslint',
      'yadda'
    ], {
      saveDev: true
    });
    this.fs.copyTpl(
      this.templatePath('gulp/_ts.coffee'),
      this.destinationPath('gulp/ts.coffee'),
      this
    );
  }
};

module.exports = gulpHelpers;

