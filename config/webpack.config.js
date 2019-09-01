const path = require('path');

module.exports = {
  entry: {
    app: './dist/tmp/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  }
};