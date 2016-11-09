const React = require('react')
const { connect } = require('react-redux')

const stats = {
  color: '#FF784F',
  marginLeft: '150px',
  fontWeight: '400',
  fontSize: '1.25em'
}

const statsTitle = {
  marginLeft: '15px',
}

function numberWithCommas(x) {
    return x.toLocaleString()
}

const HomeApplied = ({ totalApplied }) =>
<div className="panel panel-default" style={{marginBottom:'0'}}>
  <div className="panel-body">
    <span style={statsTitle}>TOTAL APPLIED</span>
    <span style={stats}>{numberWithCommas(totalApplied)}</span>
  </div>
</div>

const mapStateToProps = ({ applicants }) => {
  return {
    totalApplied: applicants.length
  }
}

module.exports = connect(mapStateToProps)(HomeApplied)
