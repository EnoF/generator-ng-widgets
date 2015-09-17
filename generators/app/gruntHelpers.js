var gruntHelpers = {
  setupGrunt: function() {
    this.fs.copy(
      this.templatePath('_Gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
    this.npmInstall([
      'grunt',
      'grunt-angular-templates',
      'grunt-contrib-clean',
      'grunt-contrib-compress',
      'grunt-contrib-concat',
      'grunt-contrib-connect',
      'grunt-contrib-copy',
      'grunt-contrib-cssmin',
      'grunt-contrib-less',
      'grunt-contrib-uglify',
      'grunt-express',
      'grunt-karma',
      'grunt-package-modules',
      'grunt-simple-mocha',
      'grunt-ts',
      'grunt-tslint',
      'karma',
      'karma-chai',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sinon-chai',
      'load-grunt-config',
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
      this.templatePath('grunt/_ts.coffee'),
      this.destinationPath('grunt/ts.coffee'),
      this
    );
  }
};

module.exports = gruntHelpers;
