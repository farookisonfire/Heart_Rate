const React = require('react')
const { connect } = require('react-redux')
const logo = require('../logo.png')
const poster = require('../heart-rate-poster.png')
const vid = require('../heart-rate-loop.mp4')
const fonts = require('google-fonts')
const EnrolledByMonth = require('./enrolled-by-month')
const Spin = require('./spinner')
const EnrolledByProgram = require('./enrolled-by-program')
const ApplicationsByDate = require('./applications-by-date')
const EnrolledButton = require('./buttons/enrolled-button')
const ProgramButton = require('./buttons/program-button')
const AppliedButton = require('./buttons/applied-button')
const HomeButton = require('./buttons/home-button')
const Home = require('./home')
const { showEnrolled } = require('../actions')


fonts.add({
  'Ropa Sans': ['400', '400italic'],
  'Source Sans Pro': true,
  'Raleway': true,
  'Roboto': true,
  'Open Sans': true

})


const headingStyle = {
  textAlign: 'center',
  fontSize: '100px',
  zIndex: '1000',
  position: 'absolute',
  top: '150px',
  color: 'white',
  fontFamily: 'Raleway',
  fontWeight: '100',
  width:'100%'
}

const logoStyle = {
  maxWidth: '150px',
}

const logoDivStyle = {
  textAlign: 'left',
  position: 'fixed',
  backgroundColor: 'white',
  zIndex: '1001',
  width: '100%',
  borderBottom: '2px solid grey'
}

const RootComponent = ({ fetchingEnrolled, fetchingEnrolledByProgram, fetchingApplicants, displayEnrolled, displayProgram, displayApplied, displayHome }) =>
<div>

  <div id="vid-div">
    <video loop muted autoPlay poster={poster} id="vid">
      <source src={vid} type="video/mp4"/>
    </video>
    <div id="overlay">
      <div style={{textAlign:'center'}}>
        <HomeButton/>
        <AppliedButton/>
        <EnrolledButton/>
        <ProgramButton/>
      </div>
      <div>
        { displayHome && <Home/> }
        { displayEnrolled && (fetchingEnrolled ? <Spin/> : <EnrolledByMonth/>) }
        { displayProgram && (fetchingEnrolledByProgram ? <Spin/> : <EnrolledByProgram/>) }
        { displayApplied && (fetchingApplicants ? <Spin/> : <ApplicationsByDate/>) }
      </div>
    </div>
  </div>
</div>

const mapStateToProps = ({ fetchingEnrolled, fetchingEnrolledByProgram, fetchingApplicants, displayEnrolled, displayProgram, displayApplied, displayHome}) =>{
return {
  fetchingEnrolled,
  fetchingEnrolledByProgram,
  fetchingApplicants,
  displayEnrolled,
  displayProgram,
  displayApplied,
  displayHome
  }
}




module.exports = connect(mapStateToProps)(RootComponent)
