const { Router } = require('express')

module.exports = function routes(db){

  const myCollection = db.collection('project3')
  const router = new Router()

  router.get('/', (req,res) => {
    myCollection.find().toArray((err, docs) => {
      if (err) {
        res.sendStatus(500)
      }
      res.json(docs)
    })
  })
  return router
}
