const env = require('./env-config.js')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['transform-define', env],
    ['transform-decorators-legacy'],
    ["import", {"libraryName": "antd","style": "css"}]
  ]
}
