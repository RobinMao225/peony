/* eslint-disable no-unused-vars */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildTargeDir = 'dist';



module.exports = {
    entry: {
        dashbord: './src/dashbord/js/index.js',
        hello: './src/hello/js/index.js',
        es6: './src/es6/js/string.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    output: {
        filename: 'js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, buildTargeDir),
        publicPath: '../'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    babelrc: false // 不采用.babelrc的配置
                }
            }
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader'],
                publicPath: '../'
            })
        },
        {
            test: /icon256\.png$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name(file) {
                        return 'image/[name].[hash:8].[ext]';
                    }
                }
            }]
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
            exclude: /icon256\.png$/, // 添加例外
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name(file) {
                        return 'image/[name].[hash:8].[ext]';
                    }
                }
            }]
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name(file) {
                        return 'font/[name].[hash:8].[ext]';
                    }
                }
            }]
        },
        {
            test: /\.(mp4)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name(file) {
                        return 'media/[name].[hash:8].[ext]';
                    }
                }
            }]
        },
        {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
        },
        {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    attrs: [
                        'img:src',
                        'video:src',
                        'video:poster'
                    ]
                }
            }]
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].[chunkhash:8].css'
        }),
        new HtmlWebpackPlugin({
            // minify: {
            //     collapseWhitespace: true
            // },
            chunks: [],
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            // minify: {
            //     collapseWhitespace: true
            // },
            chunks: ['dashbord'],
            filename: 'page/index.html',
            template: './src/dashbord/index.html'
        }),
        new HtmlWebpackPlugin({
            // minify: {
            //     collapseWhitespace: true
            // },
            chunks: ['hello'],
            filename: 'page/hello.html',
            template: './src/hello/index.html'
        }),
        new HtmlWebpackPlugin({
            // minify: {
            //     collapseWhitespace: true
            // },
            chunks: ['es6'],
            filename: 'page/es6.html',
            template: './src/es6/index.html'
        })
    ]
};