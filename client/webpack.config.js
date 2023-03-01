const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'ATE'
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      }),
      new MiniCssExtractPlugin()

      
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.m?js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        }
        
      ],
    },
  };
};
