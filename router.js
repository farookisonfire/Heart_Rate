const { Router } = require('express')
const seedData = require('./src/seed-data')

module.exports = function routes(db){

  const myCollection = db.collection('enrollment')
  const router = new Router()

  router.get('/', (req,res) => {
    myCollection.find().toArray((err, docs) => {
      if (err) {
        res.sendStatus(500)
      }
      res.json(docs)
    })
  })
  router.get('/seed', (req, res) => {
    res.send(seedData)
  })
  return router
}
