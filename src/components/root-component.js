const React = require('react')
const EnrolledByMonth = require('./enrolled-by-month')
const logo = require('../logo.png')
const poster = require('../heart-rate-poster.png')
const vid = require('../heart-rate-loop.mp4')
const fonts = require('google-fonts')

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
  top: '200px',
  left: '300px',
  color: 'white',
  fontFamily: 'Raleway',
  fontWeight: '100'
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

const RootComponent = () =>
<div>
  <div style={logoDivStyle}>
    <img style={logoStyle} src={logo}/>
  </div>
  <div id="vid-div">
    <video loop muted autoPlay poster={poster} id="vid">
      <source src={vid} type="video/mp4"/>
    </video>
    <h1 style={ headingStyle }>AT A GLANCE</h1>
    <div id="overlay">
    </div>
  </div>
  <EnrolledByMonth/>
</div>

module.exports = RootComponent
