'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
//const webpack = require('webpack');
//const webpackStream = require('webpack-stream');
//const babel = require('gulp-babel');

// deletes the dist folder
gulp.task('clean', require('del').bind(null, ['dist']));

// build css
gulp.task('styles', function () {
    return gulp.src(['./src/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(`styles.css`))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
});


// Create a new build.
gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
        'styles'
    )
));