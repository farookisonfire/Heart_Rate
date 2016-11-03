const React = require('react')
const { Panel } = require('react-bootstrap')
const { connect } = require('react-redux')

const stats = {
  color: '#FF784F',
  marginLeft: '147px',
  fontWeight: '400',
  fontSize: '1.25em'
}

const statsTitle = {
  marginLeft: '15px',
}

const HomeDay = ({ todayCount }) =>
  <div className="panel panel-default" style={{marginBottom:'0'}}>
    <div className="panel-body">
      <span style={statsTitle}>APPLIED TODAY</span>
      <span style={stats}>{todayCount}</span>
    </div>
  </div>

const mapStateToProps = ({ applicants }) => {
  let date = new Date();
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = ('0' + date.getUTCDate()).slice(-2)
  let todayDate = year + '-' + month + '-' + day
  var todayCount = 0;
  console.log('todays date')
  console.log(todayDate)
  applicants.map(applicant => {
    let applicantSubmitDate = applicant.submitDate.split(' ')[0]
    if (applicantSubmitDate === todayDate) {
      todayCount ++
    }
  })
  console.log('today\'s count')
  console.log(todayCount)
  return{
    todayCount
  }
}

module.exports = connect(mapStateToProps)(HomeDay)
