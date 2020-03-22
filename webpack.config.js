const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : {
        app : './index.js'
    },
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname,'dist'),
    },
    plugins : [
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Sid Sriram'
        })
    ],
    devServer : {
        contentBase : path.join(__dirname,'dist'),
        compress : true,
        port : 9000,
        hot : true
    },
    module : {
        rules : [
            {
                test : /\.m?js$/,
                exclude : /(node_modules|bower_components)/,
                use : {
                    loader : "babel-loader?optional=runtime&cacheDirectory",
                    options : {
                        presets : ['@babel/preset-env'],
                        plugins : [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test : /\.(scss)$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader'
                    },
                    {
                        loader : 'sass-loader',
                        options : {
                            sassOptions : {
                                includePaths: ['./node_modules']
                            }
                        }
                    }
                ]
            }
        ]
    }
}