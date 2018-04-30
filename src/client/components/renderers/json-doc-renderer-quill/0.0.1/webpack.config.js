const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        library: 'JsonDocRendererQuill',
        libraryTarget: 'window',
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
    plugins: [
        new VueLoaderPlugin()
    ]
};