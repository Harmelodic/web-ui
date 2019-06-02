const merge = require('webpack-merge');
const config = require('./webpack.config.js');

const SRC = __dirname + '/demo/';
const PUBLIC = __dirname + '/public/';

module.exports = merge(config, {
  mode: 'development',
  entry: SRC + 'index.js',
  output: {
    path: PUBLIC,
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
});
