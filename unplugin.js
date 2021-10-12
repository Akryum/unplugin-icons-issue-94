const { createUnplugin } = require('unplugin')

const plugin = createUnplugin(() => ({
  name: 'test-unplugin',
  enforce: 'pre',
  resolveId (id) {
    console.log('resolveId', id)
    if (id === 'FOO') {
      return 'FOO.js'
    }
    return null
  },
  load (id) {
    console.log('load', id)
    if (id === 'FOO') {
      return {
        code: 'export default () => console.log(`foo`)',
      }
    }
  }
}))

exports.webpack = plugin.webpack
