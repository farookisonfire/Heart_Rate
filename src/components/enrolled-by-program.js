const React = require('react')
const { enrolledByProgramChart } = require('./enrolled-by-program-options')

const EnrolledByProgram = ({ programEnrollment4, programEnrollment2, programEnrollment1, programEnrollmentHealth }) => {

  enrolledByProgramChart()
  return (
    <div>
      <div id="enrolled-by-program" style={{width: '700px'}}></div>
    </div>
    )
}

module.exports = EnrolledByProgram
