const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./src/js/index.js', './src/scss/styles.scss'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new WriteFilePlugin(),
    new HtmlWebpackPlugin({
      title: 'TS Template',
      template: './src/index.html',
      minify: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '*css',
          to: 'src/leaflet',
          context: 'node_modules/leaflet/dist',
        },
        {
          from: 'images/*',
          to: 'src/leaflet',
          context: 'node_modules/leaflet/dist',
        },
        {
          from: '*',
          to: 'src/img',
          context: 'src/img',
        },
      ],
    }),
  ],
};
