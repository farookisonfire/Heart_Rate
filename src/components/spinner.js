const React = require('react')
const { Panel } = require('react-bootstrap')

const panelStyle = {
  width: '500px',
  textAlign:'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '100px'
}

const Spinner = () =>
  <Panel style={panelStyle}>
    <h3>Loading...</h3>
  </Panel>

module.exports = Spinner
