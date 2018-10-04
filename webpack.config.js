require('babel-polyfill');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackMerge = require('webpack-merge');

const isDevMode = process.env.NODE_ENV !== 'production';

const babelLoader = {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  };

const devConfiguration = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        https: false,
        inline: true,
        port: 5000
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/dist',
        filename: 'bundle.js',
    },
};

const prodConfiguration = {
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.[hash:12].min.js'
    }
};

const commonConfiguration = {
    cache: true,
    entry: { 
        main: './src/index.tsx'
    },
    module: {
        rules: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            }, {
                test: /\.ts(x)?$/,
                use: [
                    babelLoader,
                    {
                      loader: 'ts-loader'
                    }
                ],
                exclude: /node_modules/,
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  babelLoader
                ]
            }, {
                test: /\.scss$/,
                use: [
                    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                ],
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.ProvidePlugin({
          React: 'react'
        }),
        new HtmlWebpackPlugin({
          hash: true,
          filename: 'index.html',
          template: path.join(__dirname, '/src/index.html'),
          title: 'React Typescript',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss', '.css']
    },
};
const extraConfiguration = !isDevMode ? prodConfiguration : devConfiguration;

module.exports = webpackMerge(commonConfiguration, extraConfiguration);