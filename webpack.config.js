const SRC = __dirname + '/demo/';
const PUBLIC = __dirname + '/public/';

module.exports = {
  entry: SRC + 'index.js',
  output: {
    path: PUBLIC,
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
};
