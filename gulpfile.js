'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const babel = require('gulp-babel');

// deletes the dist folder
gulp.task('clean', require('del').bind(null, ['dist']));

// build css
gulp.task('styles', function () {
    return gulp.src(['./src/theme.scss', './src/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('style.min.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
});

// build js
gulp.task('babel', function () {
    return gulp.src(['./dist/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('dist/'));
});
const webpackDev = require('./config/webpack.dev');
const webpackProd = require('./config/webpack.prod');
gulp.task('build-dev', () => {
    return webpackStream(webpackDev, webpack).pipe(gulp.dest('dist'));
});
gulp.task('build-prod', () => {
    return webpackStream(webpackProd, webpack).pipe(gulp.dest('dist'));
});

// Create a new build in dist folder
gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('styles', 'build-dev', 'build-prod'),
    'babel'
));

// Watch for changes.
gulp.task('watch', () => gulp.watch(['./src/*.js', './src/*/*.js', './src/*.scss', './src/*/*.scss'], gulp.series('babel', 'styles', 'build-dev', 'clean-tmp')));