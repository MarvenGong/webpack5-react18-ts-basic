const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const chalk = require('chalk');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./config');
module.exports = [
  new CopyWebpackPlugin({
    patterns: [
      { from: path.resolve(__dirname, '../public/px2rem-hike.js') }
    ],
  }),
  new CleanWebpackPlugin({
    dry: false, // 是否打印删除的内容
  }),
  // 热更新替换
  new webpack.HotModuleReplacementPlugin(),
  // @ts-ignore
  new WebpackBar({
    name: '能碳工场移动端h5',
    color: '#0049b0', // 默认green，进度条颜色支持HEX
    basic: true, // 默认true，启用一个简单的日志报告器
    reporter: {
      change() {
        console.log(chalk.blue.bold('文件修改，重新编译...'));
      },
      afterAllDone(context) {
        console.log(chalk.bgBlue.white(' 能碳工场移动端 ') + chalk.green(' 编译完成'));
        isDev && console.log(chalk.bgBlue.white(' 能碳工场移动端 ')
          + chalk.green(' 开发预览地址：http://127.0.0.1:' + config.dev.port))
      },
    },
  }),
  
  new HtmlWebpackPlugin({
    minify: false,
    chunks: 'all',
    template: path.resolve(__dirname, '../public/index.html'),
    filename: 'index.html'
  }),
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|ja|ko/),
].concat(isDev ? [] : [new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
})])