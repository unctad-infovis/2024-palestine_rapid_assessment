const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode:'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          sourceMap: true,
          compress: {
            drop_console: true
          }
        },
        test: /\.js(\?.*)?$/i
      }),
      new CssMinimizerPlugin({
        test: /\.css(\?.*)?$/i
      }),
    ],
  },
  plugins: [
    
  ]
});