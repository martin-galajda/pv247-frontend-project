/* eslint-disable */
const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  webpack: config => {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
      'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
    }))

    return config
  },
}
