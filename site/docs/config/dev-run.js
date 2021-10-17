
const path = require('path')
const webpack = require('webpack')
const Server = require('webpack-dev-server')
const baseConfig = require('./webpack.base.config')

const devServer = {
  host: 'localhost',
  port: 7777,
  historyApiFallback: true,
  open: true,
  hot: true,
  static: {
    directory: path.join(__dirname, './dist'),
  }
}

const devConfig = Object.assign(baseConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer
})

const compiler = webpack(devConfig)
const app = new Server(devServer, compiler)

app.startCallback(function () {
  console.info(`- server service started success -`)
})
