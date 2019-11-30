'use strict';

// ------------------------------------
// Configs
// ------------------------------------
const pkg = require('./package.json');
const build = require('./build.json');

// ------------------------------------
// GULP
// ------------------------------------
const gulp = require('gulp');

// ------------------------------------
// JS
// ------------------------------------
const terser = require('gulp-terser');
const filter = require('gulp-filter');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

// ------------------------------------
// CSS
// ------------------------------------
const sass = require('gulp-sass');
const clean = require('gulp-clean-css');

// ------------------------------------
// Utils
// ------------------------------------
const del = require('del');
const rename = require('gulp-rename');
const size = require('gulp-size');
const concat = require('gulp-concat');

// ------------------------------------
// Info from package
// ------------------------------------
const { browserslist: browsers, version } = pkg;

// Task arrays
const tasks = {
    css: [],
    js: [],
    clean: 'clean',
};

// Size plugin
const sizeOptions = { showFiles: true, gzip: true };

// Clean out /dist
gulp.task(tasks.clean, done => {
    del(['dist']);
    done();
});

Object.entries(build.js).forEach(([filename, entry]) => {
    const { dist, formats, namespace, polyfill, src } = entry;

    formats.forEach(format => {
        const name = `js:${filename}:${format}`;
        const extension = format === 'es' ? 'mjs' : 'js';
        tasks.js.push(name);
        gulp.task(name, (done) => {
            gulp
                .src(src)
                .pipe(
                    rollup(
                        {
                            plugins: [
                                resolve(),
                                commonjs(),
                                babel({
                                    presets: [
                                        [
                                            '@babel/env',
                                        ],
                                        // {
                                        //     // debug: true,
                                        //     useBuiltIns: polyfill ? 'usage' : false,
                                        //     corejs: polyfill ? 3 : undefined,
                                        // },
                                    ],
                                    babelrc: false,
                                    exclude: [/\/core-js\//],
                                }),
                            ],
                        },
                        {
                            name: namespace,
                            format: format,
                        }
                    )
                )
                .pipe(
                    rename({
                        basename: 'njtimepicker',
                        extname: `.${extension}`,
                    })
                )
                .pipe(gulp.dest(dist))
                .pipe(filter(`**/*.${extension}`))
                .pipe(terser())
                .pipe(rename({ suffix: '.min' }))
                .pipe(size(sizeOptions))
                .pipe(gulp.dest(dist))
                ;
            done();
        }
        );
    });
});

// CSS
Object.entries(build.css).forEach(([filename, entry]) => {
    const { dist, src } = entry;
    const name = `css:${filename}`;
    tasks.css.push(name);

    gulp.task(name, () =>
        gulp
            .src(src)
            .pipe(sass())
            .pipe(concat('njtimepicker.css'))
            .pipe(gulp.dest('dist'))
            .pipe(rename('njtimepicker.min.css'))
            .pipe(clean({ compatibility: 'ie8' }))
            .pipe(gulp.dest(dist))
    );
});

// Build all JS
gulp.task('js', gulp.parallel(...tasks.js));

gulp.task('build', gulp.series(tasks.clean, gulp.parallel(...tasks.js, ...tasks.css)))