const React = require('react');
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Assignment from 'material-ui/svg-icons/action/assignment';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
const { connect } = require('react-redux')
const { fetchEnrolled } = require('../../actions')
const styles = require('./styles')


const EnrolledButton = ({ dispatch }) =>
  <span>
    <IconButton
      tooltip="Enrolled"
      iconStyle={styles.smallIcon}
      style={styles.small}
      onTouchTap={() => dispatch(fetchEnrolled()) }
    >
      <CheckCircle/>
    </IconButton>
  </span>

  const mapStateToProps = ({dispatch}) => {
    return {
      dispatch
    }
  }

module.exports = connect(mapStateToProps)(EnrolledButton)
