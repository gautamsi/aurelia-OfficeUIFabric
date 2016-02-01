var path = require('path');
var outputRoot = 'dist/';
var appRoot = 'src/';

var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  less: appRoot + '**/*.less',
  output: outputRoot,
  sample: 'sample',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  packageName: pkg.name,
  styleFolder: './styles',
  dtsSrc: [
    'typings/**/*.ts',
    '!./jspm_packages/**/*.d.ts'
  ],
};
