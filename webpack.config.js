const SRC = __dirname + '/demo/';

module.exports = {
  entry: SRC + 'index.js',
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
