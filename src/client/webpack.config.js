const path = require('path');
const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.js$/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ],
        noParse: /browserfs\.js/
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal', process: 'processGlobal', Buffer: 'bufferGlobal' })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'fs': 'browserfs/dist/shims/fs.js',
            'buffer': 'browserfs/dist/shims/buffer.js',
            'path': 'browserfs/dist/shims/path.js',
            'processGlobal': 'browserfs/dist/shims/process.js',
            'bufferGlobal': 'browserfs/dist/shims/bufferGlobal.js',
            'bfsGlobal': require.resolve('browserfs')
        }
    }
};