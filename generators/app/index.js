'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var gruntHelpers = require('./gruntHelpers');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to awesome ' + chalk.red('ng-widgets') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'How is your package called'
    }, {
      type: 'list',
      name: 'buildSystem',
      message: 'What build system would you like to use?',
      choices: ['grunt', 'gulp'],
      default: 'grunt'
    }, {
      type: 'confirm',
      name: 'hasServerFiles',
      message: 'Does your app contain server files?'
    }, {
      when: function(answers) {
        return answers.hasServerFiles;
      },
      type: 'input',
      name: 'serverDir',
      message: 'What is the directory for your server files?',
      default: 'server'
    }];

    this.prompt(prompts, function(props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.projectName = this.props.projectName;
      this.package = this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this);
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        this);
      // Grunt configs
      if (this.props.buildSystem === 'grunt') {
        gruntHelpers.setupGrunt.apply(this);
      } else {
        // Copy and install Gulp files
      }
      this.bowerInstall([
        'angular-route',
        'angular',
        'angular-messages'
      ]);
      this.bowerInstall([
        'angular-mocks',
        'jquery'
      ], {
        saveDev: true
      });
    },

    projectfiles: function() {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function() {
    this.installDependencies();
  }
});
