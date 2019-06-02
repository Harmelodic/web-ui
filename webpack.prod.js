const merge = require('webpack-merge');
const config = require('./webpack.config.js');

const PUBLIC = __dirname + '/dist/';

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: PUBLIC,
    filename: 'bundle.js',
  },
});
