const webpack = require('webpack');
const pkg = require('./package.json');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './'),
        filename: 'index.js',
        library: pkg.name,
        libraryTarget: 'umd',
        publicPath: './',
        umdNamedDefine: true
    },
    module: {
        rules: [
            // {
            //     test: /\.*css$/,
            //     use : ExtractTextPlugin.extract({
            //         fallback : 'style-loader',
            //         use : [
            //             'css-loader',
            //             'sass-loader'
            //         ]
            //     })
            // },
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        alias: { 
            'react': path.resolve(__dirname, './node_modules/react') ,
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        } 
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
}