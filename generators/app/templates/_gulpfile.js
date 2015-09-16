var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require('./gulp-task/' + task)(gulp, plugins);
}

gulp.task('build', getTask('build'));
gulp.task('server', getTask('server'));