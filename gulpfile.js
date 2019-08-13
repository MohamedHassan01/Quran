let gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps');

// HTML
gulp.task('html', () => {
    return gulp.src('./project/pug/**/*.pug')
        .pipe(pug())
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

// CSS
gulp.task('css', () => {
    return gulp.src('./project/css/**/*.*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

// JS
gulp.task('js', () => {
    return gulp.src('./project/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});

// Watch
gulp.task('watch', () => {
    require('./server');
    livereload.listen();
    gulp.watch('./project/pug/**/*.pug', gulp.series('html'));
    gulp.watch('./project/css/**/*.*', gulp.series('css'));
    gulp.watch('./project/js/*.js', gulp.series('js'));
});