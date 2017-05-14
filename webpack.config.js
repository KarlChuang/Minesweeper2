var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[name]__[local]--[hash:base64:5]', // default '[hash:base64]'
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
