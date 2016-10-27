const { MongoClient } = require('mongodb')
const createApp = require('./create-app')


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/six'
const PORT =  process.env.PORT || 3030

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  // const enrolled = db.collection('enrolled')
  // enrolled.insert(seedData, (err, result) => {
  //   if(err)
  // })

  const app = createApp(db)
  app.listen(PORT, () => {
    console.log('listening on Port: ' + PORT)
  })
})
