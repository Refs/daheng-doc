'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'

    },
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js'
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
};
// The myImage variable will contain the final url of that image after processing . When using the cs-loader 

// THe html-loader handles <img src=""> in the same manner.
