var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var paths = require('../pathsDoc');

gulp.task('serve', ['build'], function(done) {
  var bs = browserSync.create('Documentation server');

  var options = {
    server: {
      baseDir: ['./dist/system/documentation'],
      routes: {
        '/root/': './',
        '*/src/': './src',
        '/jspm_packages/':'./jspm_packages/',
        '/aurelia-officeuifabric/':'./dist/system/'
      }
    },
    ghostMode:false,
    open:false
  };

  // Create a route to the build output directory so we can load the plugin from the subdir
  options.server.routes['/dist/' + paths.packageName] = paths.plugin;
  bs.init(options, done);
});
