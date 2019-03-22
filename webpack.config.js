var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: './index.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node-modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html'
        })
    ]
};