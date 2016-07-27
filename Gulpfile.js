// This file allows you to compile the main style.css file into css
// Make sure you have all requirements to run gulp installed locally
  // Check step 4 in this article if you are not sure how to do that: https://travismaynard.com/writing/getting-started-with-gulp
// Navigate to file in your terminal and type "gulp" to begin automatic compilation

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

// Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
