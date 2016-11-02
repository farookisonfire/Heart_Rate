const React = require('react');
import IconButton from 'material-ui/IconButton';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
const { showEnrolled } = require('../../actions')
const styles = require('./styles')
const { connect } = require('react-redux')

const EnrolledButton = ({ dispatch }) =>
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

const mapStateToProps = ({dispatch}) => {
  return {
    dispatch
  }
}

module.exports = connect(mapStateToProps)(EnrolledButton)
