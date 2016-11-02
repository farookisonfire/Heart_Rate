const React = require('react')
const { Panel } = require('react-bootstrap')
const { connect } = require('react-redux')

const HomeDay = ({ todayCount }) =>
  <Panel>
    <span>APPLIED TODAY</span>
    <span>{todayCount}</span>
  </Panel>

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
