const { combineReducers } = require('redux')

const displayEnrolledByMonth = (state = false, { type }) => {
  switch(type) {
    case 'SHOW_ENROLLED_BY_MONTH':
      return true
    default:
      return false
  }
}

const rootReducer = combineReducers({
  displayEnrolledByMonth
})

module.exports = rootReducer
