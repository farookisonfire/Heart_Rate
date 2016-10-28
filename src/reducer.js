const { combineReducers } = require('redux')

const fetchingEnrolled = (state = false, { type }) => {
  switch(type){
    case 'REQUEST_ENROLLED':
      return true
    default:
      return state
  }
}

const receivedEnrolled = (state = false, { type }) => {
  switch(type) {
    case 'RECEIVED_ENROLLED':
      return true
    default:
      return state
  }
}

const enrolled = (state = [], { type, payload }) => {
  switch (type) {
    case 'RECEIVED_ENROLLED':
      return state.concat(payload)
    default:
      return state
  }
}


const rootReducer = combineReducers({
  fetchingEnrolled,
  receivedEnrolled,
  enrolled
})

module.exports = rootReducer
