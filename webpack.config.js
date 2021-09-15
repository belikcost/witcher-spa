const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
require('react');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.css$/,
                use: 'css-loader',
            },
            {
                test: /\.scss$/,
                use: 'sass-loader',
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            encoding: 'base64',
                        },
                    }
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    watchOptions: {
        aggregateTimeout: 600,
        poll: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new webpack.ProvidePlugin({
            "React": "react",
            process: 'process/browser',
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
};