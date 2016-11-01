const React = require('react')
const { Panel } = require('react-bootstrap')
const applicationsByDateChart = require('./applications-by-date-options')

const ApplicationsByDate = () => {
  applicationsByDateChart()
  return (
    <Panel>
      <div id="applications-by-date" style={{width: '800px'}}></div>
    </Panel>
  )
}

const mapStateToPropos = ({ applicants }) => {

let applicationsByDate = [];
applicants.map(applicant => {
  let date = Date.UTC(applicant.submitDate.split(' ')[0].replace(/-/g, ','))
  applicationsByDate.map(application => {
    if (application.indexOf(date) === )
  })


  // if ( applicationsByDate.indexOf(date) === -1 ) {
  //   let tempPair = [date, 0];
  //   applicationsByDate.push(tempPair);
  // } else {
  //   applicationsByDate[applicationsByDate.indexOf(date)][1]
  // }
}) ;

  return {
    applicationsByDate
  }
}

module.exports = ApplicationsByDate
