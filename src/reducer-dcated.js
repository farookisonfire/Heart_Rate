const { combineReducers } = require('redux')

const initialState = {
  isFetching: false,
  fetched: false,
  enrolled: []
}

const isFetching = (state=false, { type }) => {
  switch(type){
    case 'FETCH_USERS_START':
      return true
    default:
      return false
  }
}

const fetched = (state = false, { type }) => {
  switch(type) {
      case 'FETCH_USERS_RECEIVED':
        return true
      default:
        return false
  }
}

const enrolled = (state = [], { type, payload }) => {
  switch(type) {
    case 'FETCH_USERS_RECEIVED':
      return state.concat(payload)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  isFetching,
  fetched,
  enrolled
  })


module.exports = rootReducer
