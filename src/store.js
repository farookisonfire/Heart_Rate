const { applyMiddleware, createStore } = require('redux')
const logger = require('redux-logger')
const rootReducer = require('./reducer')
import thunkMiddleware from 'redux-thunk'


console.log('in store')

const middleware = applyMiddleware(thunkMiddleware,logger())
const store = createStore(rootReducer, middleware)

module.exports = store
