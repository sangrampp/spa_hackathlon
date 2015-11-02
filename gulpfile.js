//include gulp
var gulp = require('gulp')

//include plugins
var sass = require('gulp-sass')

var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});


//compile sass
gulp.task('sass', function() {
    return gulp.src('css/src/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

//watch files for changes
gulp.task('watch', function() {
    gulp.watch('css/src/*.scss', ['sass']);
});

//default task
gulp.task('default', ['serve']);
