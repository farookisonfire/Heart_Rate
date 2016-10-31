const React = require('react')
const { connect } = require('react-redux')
const { Panel } = require('react-bootstrap')
const { enrolledByMonthChart } = require('./enrolled-by-month-options')
const { enrolledByMonthChartTitle } = require('./enrolled-by-month-options')

const panelStyle = {
  width: '500px',
  textAlign:'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '100px'
}

const EnrolledByMonth = ({ enrolled2015, enrolled2016 }) =>{
    enrolledByMonthChart(enrolled2015, enrolled2016)
    return (
      <Panel style={panelStyle} footer={ enrolledByMonthChartTitle }>
        <div id="enrolled-by-month" style={{width: '400px'}}></div>
      </Panel>
      )}

const mapStateToProps = ({ enrolled }) => {

  let enrollmentByMonth2015 = [0,0,0,0,0,0,0,0,0,0,0,0]
  let enrollmentByMonth2016 = [0,0,0,0,0,0,0,0,0,0,0,0]

  const enrolled2015 = enrolled.filter(enrollee => enrollee.enrollYear === 2015)
  const enrolled2016 = enrolled.filter(enrollee => enrollee.enrollYear === 2016)

  enrolled2015.map(person => {
    switch(person.enrollMonth) {
      case 'January': enrollmentByMonth2015[0] += 1;
        break;
      case 'February': enrollmentByMonth2015[1] += 1;
        break;
      case 'March': enrollmentByMonth2015[2] += 1;
        break;
      case 'April': enrollmentByMonth2015[3] += 1;
        break;
      case 'May': enrollmentByMonth2015[4] += 1;
        break;
      case 'June': enrollmentByMonth2015[5] += 1;
        break;
      case 'July': enrollmentByMonth2015[6] += 1;
        break;
      case 'Augut': enrollmentByMonth2015[7] += 1;
        break;
      case 'September': enrollmentByMonth2015[8] += 1;
        break;
      case 'October': enrollmentByMonth2015[9] += 1;
        break;
      case 'November': enrollmentByMonth2015[10] += 1;
        break;
      case 'December': enrollmentByMonth2015[11] += 1
        break;
      default:
        break;
    }
  })

  enrolled2016.map(person => {
    switch(person.enrollMonth) {
      case 'January': enrollmentByMonth2016[0] += 1;
        break;
      case 'February': enrollmentByMonth2016[1] += 1;
        break;
      case 'March': enrollmentByMonth2016[2] += 1;
        break;
      case 'April': enrollmentByMonth2016[3] += 1;
        break;
      case 'May': enrollmentByMonth2016[4] += 1;
        break;
      case 'June': enrollmentByMonth2016[5] += 1;
        break;
      case 'July': enrollmentByMonth2016[6] += 1;
        break;
      case 'Augut': enrollmentByMonth2016[7] += 1;
        break;
      case 'September': enrollmentByMonth2016[8] += 1;
        break;
      case 'October': enrollmentByMonth2016[9] += 1;
        break;
      case 'November': enrollmentByMonth2016[10] += 1;
        break;
      case 'December': enrollmentByMonth2016[11] += 1
        break;
      default:
        break;
    }
  })

  return {
    enrolled2015: enrollmentByMonth2015,
    enrolled2016: enrollmentByMonth2016
  }
}

  module.exports = connect(mapStateToProps)(EnrolledByMonth)
