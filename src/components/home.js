const React = require('react')
const { Grid, Row, Col, Panel } = require('react-bootstrap')
const { panelStyleHome : panelStyle, panelStyleHomeBig : panelStyleBig } = require('./styles/panel-style')
const { connect } = require('react-redux')
const HomeDay = require('./home-day')


const stats = {
  color: '#FF784F',
  marginLeft: '150px',
  fontWeight: '400',
  fontSize: '1.25em'
}

const statsTitle = {
  marginLeft: '15px',
}

function numberWithCommas(x) {
    return x.toLocaleString()
}

const Home = ({ totalApplied }) =>
<Grid style={{marginTop: '100px'}}>
  <Row className="show-grid">
    <Col xs={4} xsOffset={4}>
      <div className="panel panel-default" style={panelStyleBig}>
        <div className="panel-body" style={{padding:'0'}}>
          <Row className="show-grid">
            <Col xs={12}>
              <Panel style={panelStyle}>
                <span style={statsTitle}>TOTAL APPLIED</span>
                <span style={stats}>{numberWithCommas(totalApplied)}</span>
              </Panel>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <HomeDay/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <Panel style={panelStyle}>ROW 3</Panel>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <Panel style={panelStyle}>ROW 4</Panel>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  </Row>
</Grid>

const mapStateToProps = ({ applicants }) => {
  return {
      totalApplied: applicants.length
  }
}

module.exports = connect(mapStateToProps)(Home)
