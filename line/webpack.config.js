const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'src');
let BUIKD_PATH = path.resolve(ROOT_PATH, 'build');
let plugins = [];
let webConfig = require('./src/utils/Config');
plugins.push(new HtmlwebpackPlugin({
	title: 'Echarts line',
	template: './Template/index.html'
}));

module.exports = {
    entry:{
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output:{
        path: BUIKD_PATH,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {//服务代理
        port: webConfig.port,
        host: webConfig.getIP(),
        proxy: webConfig.getAgent(),
        disableHostCheck: true
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: APP_PATH,
            },
            {
                test:/\.scss/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                include: APP_PATH
            }
        ]
    },
    plugins:plugins,
    resolve: {
        extensions: ['*', '.js', '.jsx'] //后缀名自动补全
    }
};