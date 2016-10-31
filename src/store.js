const { applyMiddleware, createStore } = require('redux')
const logger = require('redux-logger')
const rootReducer = require('./reducer')
const initialState = require('./initial-state')
const {fetchEnrolled, fetchEnrolledByProgram } = require('./actions')
import thunkMiddleware from 'redux-thunk'


console.log('in store')

const middleware = applyMiddleware(thunkMiddleware,logger())
const store = createStore(rootReducer, middleware)

module.exports = store

store.dispatch(fetchEnrolled())
store.dispatch(fetchEnrolledByProgram())
