const React = require('react');
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
const styles = require('./styles')
const { fetchEnrolledByProgram } = require('../../actions')
const { connect } = require('react-redux')


const ProgramButton = ({ dispatch }) =>
<span>
  <IconButton
    tooltip="selected"
    iconStyle={styles.smallIcon}
    style={styles.small}
    onTouchTap={() => dispatch(fetchEnrolledByProgram()) }
  >
    <Equalizer/>
  </IconButton>
</span>

const mapStateToProps = ({ dispatch }) => {
  return {
    dispatch
  }
}

module.exports = connect(mapStateToProps)(ProgramButton)
