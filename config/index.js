'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/v3/geocode': {
            target: 'http://restapi.amap.com/v3/geocode', //高德逆向地理编码
            changeOrigin: true,
            pathRewrite: {
                '/v3/geocode': ''
            },
        },
        '/env/dust/govern': {
            // target: 'http://192.168.10.78:6268/env/dust/govern', //外网
            target: 'http://192.168.10.165:6268/env/dust/govern', //内网
            changeOrigin: true,
            pathRewrite: {
                '^/env/dust/govern': ''
            },
        },
        '/env/dust/': {
            // target: 'http://119.29.152.124:6268/env/dust/', //外网
            target: 'http://192.168.10.165:6268/env/dust/', //内网
            changeOrigin: true,
            pathRewrite: {
                '^/env/dust/': ''
            },
        },
        '/eplogin': {
            //target: 'https://login.thingspark.io/eplogin', //视频
            target: 'https://login.thingspark.io/eplogin',
            changeOrigin: true,
            pathRewrite: {
                '^/eplogin': ''
            },
        },
        '/env/dust2/': {
            target: 'http://119.29.152.124:6262/env/dust2/', //外网--叶丰
            changeOrigin: true,
            pathRewrite: {
                '^/env/dust2/': ''
            },
        },
        '/env/atmosphere': {
            target: 'http://119.29.152.124:6262/env/atmosphere',
            changeOrigin: true,
            pathRewrite: {
                '^/env/atmosphere': ''
            }
        }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: true, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
