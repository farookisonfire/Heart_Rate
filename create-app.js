const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./router')

module.exports = function createApp(db) {
  const app = express()

  app.use(bodyParser.json())
  app.use(express.static('public'))
  app.use('/api/data', routes(db))

  return app
}
