var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");
var typescript = require('gulp-typescript');
var tsc = require('typescript');

function getTsProject(target, moduleName) {
    return typescript.createProject('./tsconfig.json', { typescript: tsc, target: target || "es5", module: moduleName || "commonjs", experimentalDecorators:true, emitDecoratorMetadata:true });
}
var es6Dir = paths.output + 'es6';
var amdDir = paths.output + 'amd';
var cjsDir= paths.output + 'commonjs';
var sysDir= paths.output + 'system';

gulp.task('build-html-es6', function () {
    return gulp.src([paths.html, paths.css])
        .pipe(changed(es6Dir))
        .pipe(gulp.dest(es6Dir));
});

gulp.task('build-es6', ['build-html-es6'], function () {
    var tsProject = getTsProject("es6", "es6");
    return gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(changed(es6Dir, { extension: '.js' }))
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write({ includeContent: true }))
        .pipe(gulp.dest(es6Dir));
    // 
    // return gulp.src(paths.source)
    // .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-html-commonjs', function () {
    return gulp.src([paths.html, paths.css])
        .pipe(changed(cjsDir))
        .pipe(gulp.dest(cjsDir));
});

gulp.task('build-commonjs', ['build-html-commonjs'], function () {
    var tsProject = getTsProject("es5", "commonjs");
    return gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(changed(cjsDir, { extension: '.js' }))
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write({ includeContent: true }))
        .pipe(gulp.dest(cjsDir));
        
    // return gulp.src(paths.source)
    // .pipe(to5(assign({}, compilerOptions, { modules: 'common' })))
    // .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-html-amd', function () {
    return gulp.src([paths.html, paths.css])
        .pipe(changed(amdDir))
        .pipe(gulp.dest(amdDir));
});

gulp.task('build-amd', ['build-html-amd'], function () {
    var tsProject = getTsProject("es5", "amd");
    return gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(changed(amdDir, { extension: '.js' }))
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write({ includeContent: true }))
        .pipe(gulp.dest(amdDir));
        
    // return gulp.src(paths.source)
    // .pipe(to5(assign({}, compilerOptions, { modules: 'amd' })))
    // .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-html-system', function () {
    return gulp.src([paths.html, paths.css])
        .pipe(changed(sysDir))
        .pipe(gulp.dest(sysDir));
});

gulp.task('build-system', ['build-html-system'], function () {
    var tsProject = getTsProject("es5", "system");
    return gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(changed(sysDir, { extension: '.js' }))
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write({ includeContent: true }))
        .pipe(gulp.dest(sysDir));
        
    // return gulp.src(paths.source)
    // .pipe(to5(assign({}, compilerOptions, { modules: 'system' })))
    // .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        ['build-es6', 'build-commonjs', 'build-amd', 'build-system'],
        callback
        );
});
