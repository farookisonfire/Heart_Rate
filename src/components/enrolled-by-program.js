const React = require('react')
const { enrolledByProgramChart, enrolledByProgramTitle } = require('./enrolled-by-program-options')
const { Panel } = require('react-bootstrap')
const { connect } = require('react-redux')
const { panelStyle, panelWidth } = require('./styles/panel-style')
const ByProgram = require('./by-program/types.js')


// const UniversityCount = ({ universityCount }) =>
// <div className = "panel panel-default" style={{marginBottom:'0'}}>
//   <div className = "panel-body">
//     <span style={statsTitle}>TOTAL UNIVERSITIES</span>
//     <span style={stats}>{universityCount}</span>
//   </div>
// </div>

const stats = {
  color: '#FF784F',
  marginLeft: '135px',
  fontWeight: '400',
  fontSize: '1.25em'
}

const statsTitle = {
  marginLeft: '15px',
}

const dataPoint = (dataName, data) => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <span style={ statsTitle }>{ dataName }</span>
        <span style={ stats }>{ data }</span>
      </div>
    </div>
  )
}


const EnrolledByProgram = ({ enrollmentProgram1, enrollmentProgram2, enrollmentProgram4, enrollmentProgram2Health, enrollmentProgram4Health, enrollmentData, browser }) => {

  enrolledByProgramChart(enrollmentProgram1, enrollmentProgram2, enrollmentProgram4, enrollmentProgram2Health, enrollmentProgram4Health)
  return (
    <div>
      <Panel style={panelStyle(panelWidth(browser))} footer={enrolledByProgramTitle}>
        <div id="enrolled-by-program" style={{width: '100%', height:'300px'}}></div>
      </Panel>
      <ByProgram />
      { dataPoint('Youth Empowerment', enrollmentData.totalYE) }
      { dataPoint('Health Innovation', enrollmentData.totalHI) }
      { dataPoint('Youth Empowerment - 1 week', enrollmentData.oneWeekYE) }
      { dataPoint('Youth Empowerment - 2 week', enrollmentData.twoWeekYE) }
      { dataPoint('Youth Empowerment - 4 week', enrollmentData.fourWeekYE) }
      { dataPoint('Health Innovation - 2 week', enrollmentData.twoWeekHI) }
      { dataPoint('Health Innovation - 4 week', enrollmentData.fourWeekHI) }
    </div>
    )
}

const mapStateToProps = ({ enrolledByProgram, browser }) => {

let enrollmentProgram1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let enrollmentProgram2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let enrollmentProgram4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let enrollmentProgram2Health = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let enrollmentProgram4Health = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

enrolledByProgram.map(enrollee => {
  switch(enrollee.programId){
    case 'YECT11':
      enrollmentProgram1[0] += 1;
      enrollmentProgram1[1] += 1;
      break;
    case 'YECT12':
      enrollmentProgram1[2] += 1;
      enrollmentProgram1[3] += 1;
      break;
    case 'YECT13':
      enrollmentProgram1[4] += 1;
      enrollmentProgram1[5] += 1;
      break;
    case 'YECT14':
      enrollmentProgram1[6] += 1;
      enrollmentProgram1[7] += 1;
      break;
    case 'YECT15':
      enrollmentProgram1[8] += 1;
      enrollmentProgram1[9] += 1;
      break;
    case 'YECT16':
      enrollmentProgram1[10] += 1;
      enrollmentProgram1[11] += 1;
      break;
    case 'YECT17':
      enrollmentProgram1[12] += 1;
      enrollmentProgram1[13] += 1;
      break;
    case 'YECT21':
      enrollmentProgram2[0] += 1;
      enrollmentProgram2[1] += 1;
      break
    case 'YECT22':
      enrollmentProgram2[2] += 1;
      enrollmentProgram2[3] += 1;
      break;
    case 'YECT23':
      enrollmentProgram2[4] += 1;
      enrollmentProgram2[5] += 1;
      break;
    case 'YECT24':
      enrollmentProgram2[6] += 1;
      enrollmentProgram2[7] += 1;
      break;
    case 'YECT25':
      enrollmentProgram2[8] += 1;
      enrollmentProgram2[9] += 1;
      break;
    case 'YECT26':
      enrollmentProgram2[10] += 1;
      enrollmentProgram2[11] += 1;
      break;
    case 'YECT27':
      enrollmentProgram2[12] += 1;
      enrollmentProgram2[13] += 1;
      break;
    case 'YECT41':
      enrollmentProgram4[0] += 1;
      enrollmentProgram4[1] += 1;
      enrollmentProgram4[2] += 1;
      enrollmentProgram4[3] += 1;
      break;
    case 'YECT42':
      enrollmentProgram4[4] += 1;
      enrollmentProgram4[5] += 1;
      enrollmentProgram4[6] += 1;
      enrollmentProgram4[7] += 1;
      break;
    case 'YECT43':
      enrollmentProgram4[8] += 1;
      enrollmentProgram4[9] += 1;
      enrollmentProgram4[10] += 1;
      enrollmentProgram4[11] += 1;
      break;
    case 'YECT44':
      enrollmentProgram4[10] += 1;
      enrollmentProgram4[11] += 1;
      enrollmentProgram4[12] += 1;
      enrollmentProgram4[13] += 1;
      break;
    case 'H21':
      enrollmentProgram2Health[0] += 1;
      enrollmentProgram2Health[1] += 1;
      break
    case 'H22':
      enrollmentProgram2Health[2] += 1;
      enrollmentProgram2Health[3] += 1;
      break;
    case 'H23':
      enrollmentProgram2Health[4] += 1;
      enrollmentProgram2Health[5] += 1;
      break;
    case 'H24':
      enrollmentProgram2Health[6] += 1;
      enrollmentProgram2Health[7] += 1;
      break;
    case 'H25':
      enrollmentProgram2Health[8] += 1;
      enrollmentProgram2Health[9] += 1;
      break;
    case 'H26':
      enrollmentProgram2Health[10] += 1;
      enrollmentProgram2Health[11] += 1;
      break;
    case 'H27':
      enrollmentProgram2Health[12] += 1;
      enrollmentProgram2Health[13] += 1;
      break;
    case 'H41':
      enrollmentProgram4Health[2] += 1;
      enrollmentProgram4Health[3] += 1;
      enrollmentProgram4Health[4] += 1;
      enrollmentProgram4Health[5] += 1;
      break;
    case 'H42':
      enrollmentProgram4Health[6] += 1;
      enrollmentProgram4Health[7] += 1;
      enrollmentProgram4Health[8] += 1;
      enrollmentProgram4Health[9] += 1;
      break;
    case 'H43':
      enrollmentProgram4Health[10] += 1;
      enrollmentProgram4Health[11] += 1;
      enrollmentProgram4Health[12] += 1;
      enrollmentProgram4Health[13] += 1;
      break;
    default:
      break;
  }
})

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
    enrollmentProgram1,
    enrollmentProgram2,
    enrollmentProgram4,
    enrollmentProgram2Health,
    enrollmentProgram4Health,
    enrollmentData,
    browser
  }
}


module.exports = connect(mapStateToProps)(EnrolledByProgram)
