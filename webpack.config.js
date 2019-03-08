const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: path.join(__dirname, '/app/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpe?g|png|gif)$/,
            use: [{
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }]
        },
        {
            test: /\.(eot|svg|ttf|woff2?|otf)$/,
            use: 'file-loader'
        }]
    },

    plugins:[
        new HWP(
            {template: path.join(__dirname,'/app/src/index.html')}
        )
    ]
}
