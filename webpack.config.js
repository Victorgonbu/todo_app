const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    index: './src/assets/scripts/script.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new Dotenv(),
  ],
};