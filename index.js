const { MongoClient } = require('mongodb')
const createApp = require('./create-app')


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/six'
const PORT =  process.env.PORT || 3030

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const app = createApp(db)
  app.listen(PORT, () => {
    console.log('listening on Port: ' + PORT)
  })
})


// const express = require('express')
//
// const app = express()
//
// app.use(express.static('public'))
// app.get('/api/data', (req,res) => {
//   console.log('in get')
//   res.send()
// })
