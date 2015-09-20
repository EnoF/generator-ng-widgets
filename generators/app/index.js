'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var gruntHelpers = require('./gruntHelpers');
var gulpHelpers = require('./gulpHelpers.js');

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
      this.projectName = this.props.projectName.toSnakeCase();
      this.projectModule = this.props.projectName.toCamelCase();
      this.widgetName = this.projectName;
      this.widgetModule = this.projectModule.toCapital();
      this.directiveName = this.projectModule;
      this.isMainModule = true;
      this.package = this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this);
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        this);
      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('app/index.html'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('app/_app.ts'),
        this.destinationPath('app/app.ts'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('app/widgets/_module.ts'),
        this.destinationPath('app/widgets/' + this.widgetName + '/' + this.widgetName + '.ts'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('app/widgets/_viewModel.ts'),
        this.destinationPath('app/widgets/' + this.widgetName + '/src/' + this.widgetName + '-vm.ts'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('app/widgets/_directive.ts'),
        this.destinationPath('app/widgets/' + this.widgetName + '/src/' + this.widgetName + '.ts'),
        this
      );
      this.fs.copyTpl(
        this.templatePath('app/widgets/_view.html'),
        this.destinationPath('app/widgets/' + this.widgetName + '/src/' + this.widgetName + '.html'),
        this
      );
    },

    buildSystem: function() {
      // Grunt configs
      if (this.props.buildSystem === 'grunt') {
        gruntHelpers.setupGrunt.apply(this);
      } else {
        gulpHelpers.setupGulp.apply(this);
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

String.prototype.toCapital = function() {
  return this.toCamelCase().replace(/(.)/, function(firstLetter) {
    return firstLetter.toUpperCase();
  });
};

String.prototype.toCamelCase = function() {
  return this.replace(/[ |-](.)/g, function(match, firstLetter) {
    return firstLetter.toUpperCase();
  });
};

String.prototype.toSnakeCase = function() {
  return this.replace(/ (.)|[A-Z]/g, function(capitalLetter, firstLetter) {
    var letter = firstLetter || capitalLetter.toLowerCase();
    return '-' + letter;
  });
};
