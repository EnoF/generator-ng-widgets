var gulpHelpers = {
  setupGulp: function () {
    this.fs.copy(
      this.templatePath('_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.npmInstall([
      'coffee-script',
      'gulp',
      'gulp-compressor',
      'gulp-concat',
      'gulp-cssmin',
      'gulp-karma',
      'gulp-less',
      'gulp-live-server',
      'gulp-minify-html',
      'gulp-mocha',
      'gulp-ng-html2js',
      'gulp-sourcemaps',
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
    this.fs.copy(
      this.templatePath('_karma.conf.js'),
      this.destinationPath('test/karma.conf.js')
    );

    this.fs.copy(
      this.templatePath('_test.spec.template'),
      this.destinationPath('test/template/test.spec.template')
    );
    this.fs.copyTpl(
      this.templatePath('gulp/_ngtemplate.coffee'),
      this.destinationPath('gulp/ngtemplate.coffee'),
      this
    );
  }
};

module.exports = gulpHelpers;

