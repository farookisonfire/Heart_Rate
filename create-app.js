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


// app.use(express.static('public'))
// app.get('/api/data', (req,res) => {
//   console.log('in get')
//   res.send()
// })
//
// app.listen(3030, () => {
//   console.log('listening on PORT 3030')
// })
