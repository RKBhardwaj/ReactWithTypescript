const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".css"],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
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
        "react": "React",
        "react-dom": "ReactDOM"
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        https: false,
        inline: true,
        port: 5000
    },
    plugins: [
        new webpack.ProvidePlugin({
          React: 'react'
        }),
        new HtmlWebpackPlugin({
          hash: true,
          filename: 'index.html',
          template: path.join(__dirname, '/src/index.html'),
          title: 'React-Typescript',
        }),
    ],
};