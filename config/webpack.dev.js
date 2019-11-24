const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    libraryTarget: 'umd',
    filename: 'scripts.js'
  },
  devServer: {
    contentBase: './dist'
  }
});