const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
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