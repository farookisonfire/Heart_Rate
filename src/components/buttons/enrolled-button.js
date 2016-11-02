const React = require('react');
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Assignment from 'material-ui/svg-icons/action/assignment';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
const { showEnrolled } = require('../actions')


const styles = {
  smallIcon: {
    width: 30,
    height: 30,
    color: 'dark-grey'
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
    margin: 40
  },
};


exports.EnrolledButton = (dispatch) =>
  <span>
    <IconButton
      tooltip="Enrolled"
      iconStyle={styles.smallIcon}
      style={styles.small}
      onTouchTap={() => dispatch(showEnrolled()) }
    >
      <CheckCircle/>
    </IconButton>
  </span>


exports.ProgramButton = () =>
<span>
  <IconButton
    tooltip="selected"
    iconStyle={styles.smallIcon}
    style={styles.small}
  >
    <Equalizer/>
  </IconButton>
</span>

exports.AppliedButton = () =>
  <span>
    <IconButton
      tooltip="Applied"
      iconStyle={styles.smallIcon}
      style={styles.small}
    >
      <Assignment/>
    </IconButton>
  </span>
