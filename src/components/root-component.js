const React = require('react')
const EnrolledByMonth = require('./enrolled-by-month')
const logo = require('../logo.png')


const headingStyle = {
  textAlign: 'center',
  marginBottom: '120px',
  marginTop: '60px',
  fontSize: '48px'
}

const logoStyle = {
  maxWidth: '300px',
  marginTop:'80px'
}

const logoDivStyle = {
  textAlign: 'center'
}

const RootComponent = () =>
<div>
  <div style={logoDivStyle}>
    <img style={logoStyle} src={logo}/>
  </div>
  <h1 style={ headingStyle }>AT A GLANCE</h1>
  <hr></hr>
  <EnrolledByMonth/>
</div>

module.exports = RootComponent
