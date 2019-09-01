const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'scripts.js'
  },
  devServer: {
    contentBase: './dist'
  }
});