const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['styleloader', 'css-loader']
            }
        ]    
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
       static: {
           directory: path.join(__dirname, 'public')
       },
        compress: true,
        open: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

