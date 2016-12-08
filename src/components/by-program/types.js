const React = require('react');
const { typesChart } = require('./types-chart');
const Highcharts = require('highcharts')
const drilldown = require('highcharts-drilldown')
const { connect } = require('react-redux')

const ByProgram = ({ data }) => {
drilldown(Highcharts)
typesChart(data)

return (
  <div>
    <div
      id="types-chart"
      style= {{
        minWidth: '310px',
        maxWidth: '600px',
        height: '400px',
        margin:'0 auto'
      }}
    >
    </div>
  </div>
  )
}

const mapStateToProps = ({ enrolledByProgram }) => {

  const enrollmentData = {
    totalYE : 0,
    totalHI : 0,
    oneWeekYE : 0,
    twoWeekYE : 0,
    fourWeekYE : 0,
    twoWeekHI : 0,
    fourWeekHI : 0
  }

  enrolledByProgram.map(enrollee => {
    switch (enrollee.programType) {
      case 'Health-Innovation':
        if (enrollee.programDuration === '2 week') {
          enrollmentData.twoWeekHI ++;
        } else if (enrollee.programDuration === '4 week'){
          enrollmentData.fourWeekHI ++
        }
          enrollmentData.totalHI ++;
        break;
      case 'Youth Empowerment':
        if (enrollee.programDuration === '1 week') {
          enrollmentData.oneWeekYE ++;
        } else if (enrollee.programDuration === '2 week') {
          enrollmentData.twoWeekYE ++;
        } else if (enrollee.programDuration === '4 week') {
          enrollmentData.fourWeekYE ++;
        }
          enrollmentData.totalYE ++;
          break;
        default:
          break;
    }
  })

  return {
    data: enrollmentData
  }

}

module.exports = connect(mapStateToProps)(ByProgram)
