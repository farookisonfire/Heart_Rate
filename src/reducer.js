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

const fetchingEnrolledByProgram = ( state=false, { type }) => {
  switch(type) {
    case 'REQUEST_ENROLLED_BY_PROGRAM':
      return true
    default:
      return state
  }
}

const receivedEnrolledByProgram = (state = false, { type }) => {
  switch(type) {
    case 'RECEIVE_ENROLLED_BY_PROGRAM':
      return true
    default:
      return state
  }
}

const enrolledByProgram = (state = [], { type, payload }) => {
  switch(type) {
    case 'RECEIVE_ENROLLED_BY_PROGRAM':
      return state.concat(payload)
    default:
      return state
  }
}


const rootReducer = combineReducers({
  fetchingEnrolled,
  receivedEnrolled,
  enrolled,
  fetchingEnrolledByProgram,
  receivedEnrolledByProgram,
  enrolledByProgram
})

module.exports = rootReducer
