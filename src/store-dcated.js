const {  applyMiddleware, createStore } = require('redux')
const logger = require('redux-logger')
import thunkMiddleware from 'redux-thunk'
const reducer = require('./reducer')

const middleware = applyMiddleware(thunkMiddleware,logger())
const store = createStore(reducer, middleware)

store.dispatch((dispatch) => {
  dispatch({type: 'FETCH_USERS_START'})
    return fetch('/api/data/seed')
      .then(response => {
        return response.json()
        }).then(res => {
          dispatch({type:'FETCH_USERS_RECEIVED', payload: res})
          /*console.log(res)*/
          })
  })
