var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('sass', function () {
  return gulp.src(['./scss/main.scss'])
  .pipe(sass())
  .pipe(rename('fyi.css'))
  .pipe(gulp.dest('./css'))
  .pipe(concat('fyi.min.css'))
  .pipe(nano())
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('default', ['serve']);