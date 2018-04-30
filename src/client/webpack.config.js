const path = require('path');
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
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};