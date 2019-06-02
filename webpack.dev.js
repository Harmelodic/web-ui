const merge = require('webpack-merge');
const config = require('./webpack.config.js');

const PUBLIC = __dirname + '/public/';

module.exports = merge(config, {
  mode: 'development',
  output: {
    path: PUBLIC,
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
});
