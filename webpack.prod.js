const merge = require('webpack-merge');
const config = require('./webpack.config.js');

const SRC = __dirname + '/src/';
const PUBLIC = __dirname + '/dist/';

module.exports = merge(config, {
  entry: SRC + 'index.js',
  mode: 'production',
  output: {
    path: PUBLIC,
    filename: 'index.js',
  },
});
