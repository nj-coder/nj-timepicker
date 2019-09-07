const merge = require('webpack-merge');
const common = require('./webpack.config');
const ClosurePlugin = require('closure-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'scripts.min.js'
  }
});