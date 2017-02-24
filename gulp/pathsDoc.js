var appRoot = './src/documentation/src/';
var outputRoot = './src/documentation/dist/';
var plugin = "./dev/"
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));


module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  json: appRoot + '**/*.json',
  woff2: appRoot + '**/*.woff2',
  plugin:plugin,
  output: outputRoot,
  doc:'./doc',
  dtsSrc: [
    './src/documentation/typings/**/*.d.ts',
    './src/documentation/custom_typings/**/*.d.ts'
  ],
  packageName: pkg.name
};
