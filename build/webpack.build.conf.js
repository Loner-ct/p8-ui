'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const webpack = require("webpack");
const uglify = require('uglifyjs-webpack-plugin');
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    index: ['./src/index.js'],
    // inject: ['./src/plugins/inject.js'],
    api: ['./src/plugins/api.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: '/dist/',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'P8',
    umdNamedDefine: true,
  },
  externals: {
    vue: "vue",
    axios: "axios"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      main: path.resolve(__dirname, '../src'),
      packages: path.resolve(__dirname, '../packages'),
      examples: path.resolve(__dirname, '../examples'),
      '~': path.resolve('src'),

    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('packages'),
          resolve('node_modules/bpmn-js'),
          resolve('node_modules/@babel/parser/lib'),
          resolve('node_modules/diagram-js/lib'),
          resolve('node_modules/@bpmn-io/element-templates-validator'),
          resolve('node_modules/bpmn-js-properties-panel/lib'),
          resolve('node_modules/element-ui/src'),
          resolve('node_modules/element-ui/packages'),
          resolve('node_modules/webpack-dev-server/client')
        ],
        options: {
          presets: ["@vue/babel-preset-jsx","@babel/preset-env"],
          plugins: [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-syntax-jsx", 
            "@babel/plugin-syntax-dynamic-import"
          ]
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { 
        test:/\.scss/,
        use:[
          { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ] 
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new uglify(),
    // new CompressionWebpackPlugin(),
    // new MonacoWebpackPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
  //   new BundleAnalyzerPlugin(
  //     {
  //        analyzerMode: 'server',
  //        analyzerHost: '127.0.0.1',
  //        analyzerPort: 8889,
  //        reportFilename: 'report.html',
  //        defaultSizes: 'parsed',
  //        openAnalyzer: true,
  //        generateStatsFile: false,
  //        statsFilename: 'stats.json',
  //        statsOptions: null,
  //        logLevel: 'info'
  //          }
  // ),
  ]
}