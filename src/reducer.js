const { combineReducers } = require('redux')

const fetchingEnrolled = (state = false, { type }) => {
  switch(type){
    case 'REQUEST_ENROLLED':
      return true
    case 'RECEIVED_ENROLLED':
      return false
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
      if (state.length < 1) {
        return state.concat(payload)
      }
        return state
    default:
      return state
  }
}

const fetchingEnrolledByProgram = ( state=false, { type }) => {
  switch(type) {
    case 'REQUEST_ENROLLED_BY_PROGRAM':
      return true
    case 'RECEIVE_ENROLLED_BY_PROGRAM':
      return false
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
      if (state.length < 1) {
        return state.concat(payload)
      }
      return state
    default:
      return state
  }
}

const fetchingApplicants = (state = false, { type }) => {
  switch(type){
    case 'REQUEST_APPLICANTS':
      return true;
    case 'RECEIVED_APPLICANTS':
      return false
    default:
      return state
  }
}

const receivedApplicants = (state = false, { type } ) => {
  switch(type) {
    case 'RECEIVED_APPLICANTS':
      return true;
    default:
      return state
  }
}

const applicants = (state = [], { type, payload } ) => {
  switch(type) {
    case 'RECEIVED_APPLICANTS':
      if( state.length < 1) {
        return state.concat(payload)
      }
      return state
    default:
      return state
  }
}

const displayEnrolled = (state = false, { type }) => {
  switch(type){
    case 'REQUEST_ENROLLED':
      return true;
    case 'REQUEST_ENROLLED_BY_PROGRAM':
      return false;
    case 'REQUEST_APPLICANTS':
      return false;
    default:
      return state;
  }
}

const displayProgram = (state = false, { type }) => {
  switch(type) {
    case 'REQUEST_ENROLLED_BY_PROGRAM':
      return true;
    case 'REQUEST_ENROLLED':
      return false;
    case 'REQUEST_APPLICANTS':
      return false;
    default:
      return state
  }
}

const displayApplied = (state = false, { type }) => {
  switch(type) {
    case 'REQUEST_APPLICANTS':
      return true;
    case 'REQUEST_ENROLLED':
      return false;
    case 'REQUEST_ENROLLED_BY_PROGRAM':
      return false;
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
  enrolledByProgram,
  fetchingApplicants,
  receivedApplicants,
  applicants,
  displayEnrolled,
  displayProgram,
  displayApplied
})

module.exports = rootReducer
