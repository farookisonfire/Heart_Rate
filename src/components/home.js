const React = require('react')
const { Grid, Row, Col, Panel } = require('react-bootstrap')
const { panelStyleHome : panelStyle, panelStyleHomeBig : panelStyleBig } = require('./styles/panel-style')
const HomeApplied = require('./home-applied')
const HomeDay = require('./home-day')
const HomeEnrolled = require('./home-enrolled')
const UniversityCount = require('./home-universities')


const stats = {
  color: '#FF784F',
  marginLeft: '150px',
  fontWeight: '400',
  fontSize: '1.25em'
}

const statsTitle = {
  marginLeft: '15px',
}

const Home = ({ totalApplied }) =>
<Grid style={{marginTop: '100px'}}>
  <Row className="show-grid">
    <Col style={{width:'350px', marginLeft:'auto', marginRight:'auto'}}>
      <div className="panel panel-default" style={panelStyleBig}>
        <div className="panel-body" style={{padding:'0'}}>
          <Row className="show-grid">
            <Col xs={12}>
              <HomeApplied/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <HomeDay/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <HomeEnrolled/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <UniversityCount/>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  </Row>
</Grid>


module.exports = Home
