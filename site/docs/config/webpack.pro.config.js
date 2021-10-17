const baseConfig = require('./webpack.base.config')

const proConfig = Object.assign(baseConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
})

module.exports = proConfig