const launcher = require('simple-autoreload-server')

const server = launcher({
  port: 8008,
  path: './src'
})
