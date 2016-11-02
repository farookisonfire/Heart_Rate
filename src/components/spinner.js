const React = require('react')
const { Panel } = require('react-bootstrap')
const Spinner = require('react-spinkit')


const Spin = () =>
  <div style={{textAlign:'center', marginTop:'150px'}}>
    <div style = {{display:'inline-block'}}>
      <Spinner spinnerName="cube-grid" />
    </div>
  </div>

module.exports = Spin
