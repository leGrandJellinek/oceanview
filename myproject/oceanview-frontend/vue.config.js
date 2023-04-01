const { defineConfig } = require('@vue/cli-service')
const BundleTracker = require('webpack-bundle-tracker');
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: 'http://localhost:8080/',
  publicPath: process.env.NODE_ENV === 'production'
  ? 'https://oceanview.uz/'
  : '/',
  outputDir: "./dist/",

  chainWebpack: config => {
      config.optimization.splitChunks(false)

      config.plugin('BundleTracker').use(BundleTracker, [
          {
              filename: './webpack-stats.json'
          }
      ])

      config.resolve.alias.set('__STATIC__', 'static')

      config.devServer
          .host('localhost')
          .port(8080)
          .hot(true)
          .https(false)
          .historyApiFallback(true)
          .headers({'Access-Control-Allow-Origin': ['\*']})
      config.watchOptions({
        poll: 1000
      })
  },
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  },
})
