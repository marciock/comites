var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './src/app.js',
     entry: ["babel-polyfill", "./src/app.js"],
     output: {
         path: path.resolve(__dirname, './public/build'),
         filename: 'index.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 options: {
                     presets: ['es2015'],
                     cacheDirectory: true,
                     plugins: [
                        "transform-custom-element-classes",
                        "transform-es2015-classes"
                      ]

                 },
                
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };