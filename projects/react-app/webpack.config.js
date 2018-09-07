const path = require('path')

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devtool: '#source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './demo/'),
        compress: true,
        hot: false,
        port: 9000,
        setup: function (app) {

        }
    }
}