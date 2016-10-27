const { Router } = require('express')

module.exports = function routes(db){

  const myCollection = db.collection('project3')
  const router = new Router()

  router.get('/', (req,res) => {
    myCollection.find().toArray((err, docs) => {
      if (err) return res.sendStatus(500)
      console.log('In Get')
      res.json(docs)
    })
  })
  return router
}
