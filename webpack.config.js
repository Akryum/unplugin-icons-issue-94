const path = require('path')

module.exports = {
  mode: 'production',

  plugins: [
    require('unplugin-icons/webpack')(),
    require('./unplugin').webpack(),
  ],

  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.webpack-cache'),
  },
}
