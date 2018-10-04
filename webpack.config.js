const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

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
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

const commonConfiguration = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: /node_modules/
            },
            {
                test: /.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader'],
                }),
            },
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
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
};

const extraConfiguration = PRODUCTION ? prodConfiguration : devConfiguration;

module.exports = webpackMerge(commonConfiguration, extraConfiguration);