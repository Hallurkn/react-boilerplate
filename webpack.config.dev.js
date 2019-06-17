const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: '1337'
    },
    devtool: 'source-map'
})
