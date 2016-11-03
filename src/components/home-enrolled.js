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

const HomeEnrolled = ({ totalEnrolled }) =>
  <div className="panel panel-default" style={{marginBottom:'0'}}>
    <div className="panel-body">
      <span style={ statsTitle }>TOTAL ENROLLED</span>
      <span style={stats}>{ totalEnrolled }</span>
    </div>
  </div>

const mapStateToProps = ({ enrolledByProgram }) => {
  return {
    totalEnrolled:enrolledByProgram.length
  }
}

module.exports = connect(mapStateToProps)(HomeEnrolled)
