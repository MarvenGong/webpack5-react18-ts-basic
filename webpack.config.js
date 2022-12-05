// @ts-nocheck
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const smp = new SpeedMeasurePlugin();
const fs = require('fs');
const packageJson = require('./package.json');
const optimization = require('./webpack-configs/optimization');
const config = require('./webpack-configs/config');
const plugins = require('./webpack-configs/plugins');
const isDev = process.env.NODE_ENV === 'development';
const SMP_SWICTH = false;
console.log('-------当前环境-------', process.env.NODE_ENV);
const wrapConfig = (isDev && SMP_SWICTH) ? smp.wrap : (config) => config;
module.exports = wrapConfig({
  target: 'web',
  mode: isDev ? 'development' : 'production',
  entry: {
    [packageJson?.name]: path.resolve(__dirname, './src/app.tsx')
  },
  output: {
    filename: isDev ? '[name].js' : '[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true
  },
  // infrastructureLogging: {
  //   level: 'error'
  // },
  stats: {
    all: false,
    assets: true,
    errors: true,
    assetsSort: '!size',
    entrypoints: true,
    modules: false,
    assetsSpace: 1000,
    preset: 'minimal'
  },
  devServer: {
    ...config.dev,
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, './public'),
    // },
    watchFiles: './src/**/*'
  },
  devtool: isDev ? 'inline-source-map' : 'source-map',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@tea/app': path.resolve(__dirname, './app')
    },
    extensions: ['.ts', '.tsx', '.js', 'less']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory([
                {
                  style: false,
                  libraryName: 'lodash',
                  libraryDirectory: null,
                  camel2DashComponentName: false
                },
                { style: true }
              ])
            ]
          }),
          compilerOptions: {
            module: 'esnext'
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 现网环境才提取css到一个文件中
          {
            loader: 'css-loader' // 使用import语句导入样式
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: './postcss.config.js'
              },
              sourceMap: true
            }
          },
          {
            loader: 'less-loader', // 转less为css
            options: {
              lessOptions: {
                modifyVars: {
                  '@body-background': '#f5f5f5'
                },
                javascriptEnabled: true
              }
            }
          }
          // {
          //   loader: 'style-resources-loader',
          //   options: {
          //     patterns: path.resolve(__dirname, './src/styles/common.less'), // 全局引入公共的scss 文件
          //   },
          // },
        ]
      },
      {
        test: /\.(png|jp(e)?g|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader', // 处理图片和字体等资源，小于limit则编码，大于则处理路径，包含了 file-loader
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  watchOptions: {
    // 设置不监听的⽂件或⽂件夹，默认为空
    ignored: /node_modules/,
    // ⽂件改变不会⽴即执⾏，⽽是会等待300ms之后再去执⾏
    aggregateTimeout: 300,
    // 原理是轮询系统⽂件有⽆变化再去更新的，默认1秒钟轮询1000次
    poll: 1000
  },
  plugins,
  optimization: !isDev ? optimization : {}
});
