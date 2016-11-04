const { applyMiddleware, createStore, compose } = require('redux')
const logger = require('redux-logger')
const rootReducer = require('./reducer')
import thunkMiddleware from 'redux-thunk'
import { responsiveStoreEnhancer } from 'redux-responsive'

console.log('in store')

const store = createStore(
    rootReducer,
    compose(
        responsiveStoreEnhancer,
        applyMiddleware(thunkMiddleware,logger())
    )
)

module.exports = store
