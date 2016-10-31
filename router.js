const { Router } = require('express')
const seedData = require('./src/seed-data')

module.exports = function routes(db){

  const enrolled = db.collection('enrollment')
  const enrolledByProgram = db.collection('enrollmentByProgram')
  const router = new Router()

  router.get('/', (req,res) => {
    enrolled.find().toArray((err, docs) => {
      if (err) return res.sendStatus(500)
      console.log('In Get')
      res.json(docs)
    })
  })
  router.get('/seed', (req, res) => {
    res.send(seedData)
  })
  router.get('/enrolled-by-program', (req, res) => {
    enrolledByProgram.find().toArray((err, docs) => {
      if (err) return res.sendStatus(500)
      res.json(docs)
      })
    })

  return router
}
