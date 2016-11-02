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

exports.requestEnrolledByProgram = () => {
  return { type: 'REQUEST_ENROLLED_BY_PROGRAM' }
}

exports.receiveEnrolledByProgram = (payload) => {
  return { type: 'RECEIVE_ENROLLED_BY_PROGRAM', payload }
}

exports.fetchEnrolledByProgram = () => {
  return (dispatch) => {
    dispatch(exports.requestEnrolledByProgram())
      return fetch('/api/data/enrolled-by-program')
        .then(response => response.json())
        .then(json => dispatch(exports.receiveEnrolledByProgram(json)))

  }
}

exports.requestApplicants = () => {
  return { type: 'REQUEST_APPLICANTS' }
}

exports.receiveApplicants = (payload) => {
  return { type: 'RECEIVED_APPLICANTS', payload }
}

exports.fetchApplicants = () => {
  return (dispatch) => {
    dispatch(exports.requestApplicants())
      return fetch('/api/data/applicants')
        .then(response => response.json())
        .then(json => dispatch(exports.receiveApplicants(json)))
  }
}

exports.goHome = () => {
  return { type: 'SHOW_HOME' }
}
