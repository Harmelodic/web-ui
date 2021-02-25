const SRC = __dirname + '/demo/';
const PUBLIC = __dirname + '/public/';

module.exports = {
  mode: 'development',
  devServer: {
    compress: true,
    contentBase: PUBLIC,
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  devtool: 'inline-source-map',
  entry: SRC + 'index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
  output: {
    path: PUBLIC,
    filename: 'bundle.js',
  },
};
