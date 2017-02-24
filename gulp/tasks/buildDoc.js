var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var assign = Object.assign || require('object.assign');
var merge = require('merge2');
var paths = require('../pathsDoc');
var changed = require('gulp-changed');
var runSequence = require('run-sequence');
var buildPath = require('../pathsBuild');


var tsProjectSystem = ts.createProject('./src/documentation/tsconfig._json', {
  typescript: require('typescript'),
  "declaration": true,
  target: 'es5',
  module: 'system'
});


function build(tsProject, outputPath) {
  var tsResult = gulp.src(paths.dtsSrc.concat(paths.source))
    .pipe(plumber())
    .pipe(changed(outputPath, {
      extension: '.ts'
    }))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(tsProject());

  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations is done. 
      tsResult.dts.pipe(gulp.dest(outputPath)),
      tsResult.js.pipe(gulp.dest(outputPath))
    ])
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: paths.root
    }))
    .pipe(gulp.dest(outputPath))
}


gulp.task('documentation-system', function () {
  return build(tsProjectSystem, paths.output);
});



gulp.task('documentation-html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output));
});


gulp.task('documentation-css', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.output));
});


gulp.task('documentation-json', function () {
  return gulp.src(paths.json)
    .pipe(gulp.dest(paths.output));
});


gulp.task('documentation-woff2', function () {
  return gulp.src(paths.woff2)
    .pipe(gulp.dest(paths.output));
});


// gulp.task('copy-plugin', function () {
//   return gulp.src(buildPath.output + 'system/**/*.*')
//     .pipe(gulp.dest(paths.output + 'pluginDist/'));
// });

gulp.task('copy-config', function () {
  return gulp.src('./config.js')
    .pipe(gulp.dest(buildPath.output + 'system/documentation/'));
});



gulp.task('documentation-build', function (callback) {
  return runSequence(
    'clean-sample', ['documentation-json', 'documentation-woff2', 'documentation-css', 'documentation-html', 'documentation-system', 'copy-config'],
    callback
  );
});


