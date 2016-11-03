const React = require('react')
const { connect } = require('react-redux')

const stats = {
  color: '#FF784F',
  marginLeft: '135px',
  fontWeight: '400',
  fontSize: '1.25em'
}

const statsTitle = {
  marginLeft: '15px',
}


const UniversityCount = ({ universityCount }) =>
<div className = "panel panel-default" style={{marginBottom:'0'}}>
  <div className = "panel-body">
    <span style={statsTitle}>TOTAL UNIVERSITIES</span>
    <span style={stats}>{universityCount}</span>
  </div>
</div>

const mapStateToProps = ({ enrolledByProgram }) => {

  const universities = [];
  enrolledByProgram.map(enrollee => {
    if (!universities.includes(enrollee.university)) {
      universities.push(enrollee.university)
    }
  })

  return {
    universityCount: universities.length
  }
}

module.exports = connect(mapStateToProps)(UniversityCount)
