const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = common({
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/prod'),
    filename: 'tomowallet_bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  optimization: { minimize: true, splitChunks: { chunks: 'all' } },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/(?!english)/, /bip39\/src\/wordlists$/),
  ],
});