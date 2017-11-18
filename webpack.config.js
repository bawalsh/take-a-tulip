const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader', 'postcss-loader' ] },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0.9])?$/, use: 'url-loader' },
            { test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0.9])?$/, use: 'file-loader' }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;