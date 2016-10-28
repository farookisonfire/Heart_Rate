exports.requestEnrolled = () => {
  return { type: 'REQUEST_ENROLLED'}
}

exports.receiveEnrolled = (payload) => {
  return { type: 'RECEIVED_ENROLLED', payload }
}

exports.fetchEnrolled = () => {
  return (dispatch) => {
    dispatch(exports.requestEnrolled())
      return fetch('/api/data')
        .then(response => response.json())
        .then(json => dispatch(exports.receiveEnrolled(json)))
  }
}
