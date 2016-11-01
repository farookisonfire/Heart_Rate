const React = require('react')
const { connect } = require('react-redux')
const { Panel } = require('react-bootstrap')
const { applicationsByDateChart, applicationsByDateTitle } = require('./applications-by-date-options')

const panelStyle = {
  width: '900px',
  textAlign:'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '100px'
}

const ApplicationsByDate = ({ chartData }) => {
  applicationsByDateChart(chartData)
  return (
    <Panel style={panelStyle} footer={applicationsByDateTitle}>
      <div id="applications-by-date" style={{width: '800px'}}></div>
    </Panel>
  )
}



const mapStateToProps = ({ applicants }) => {

  var submitDates = []
	applicants.map(applicant => {
		let date = applicant.submitDate.split(' ')[0]
      .split('-')
        .map(date => parseInt(date))
		let utcDate = Date.UTC(date[0], date[1]-1, date[2])
		submitDates.push(utcDate)
	})

	submitDates.sort()
	var chartData = []
	var previous

	for (var i = 0 ; i < submitDates.length ; i++ ) {
		if (submitDates[i] !== previous) {
			let dateAndCount = { date:submitDates[i], count:1 }
			chartData.push(dateAndCount)
		} else {
			chartData[chartData.length - 1].count++
		}
		previous = submitDates[i]
	}

  chartData = chartData.map(data => [data.date, data.count])
  return {
    chartData
  }
}

module.exports = connect(mapStateToProps)(ApplicationsByDate)
