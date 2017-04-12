var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var livereload = require('gulp-livereload');

livereload({ start: true })

gulp.task('default', function () {
  return gulp.src(['./scss/main.scss'])
  .pipe(sass())
  .pipe(rename('fyi.css'))
  .pipe(gulp.dest('./css'))
  .pipe(concat('fyi.min.css'))
  .pipe(nano())
  .pipe(gulp.dest('./css'))
  .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./scss/**/*.scss', ['default']);
});