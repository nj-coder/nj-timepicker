const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  output: {
    libraryTarget: 'umd',
    filename: 'scripts.min.js'
  }
});