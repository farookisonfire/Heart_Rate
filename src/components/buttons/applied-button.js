const React = require('react');
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Assignment from 'material-ui/svg-icons/action/assignment';
const styles = require('./styles')
const { fetchApplicants } = require('../../actions')
const { connect } = require('react-redux')


const AppliedButton = ({ dispatch }) =>
  <span>
    <IconButton
      tooltip="Applied"
      iconStyle={styles.smallIcon}
      style={styles.small}
      onTouchTap = {() => dispatch(fetchApplicants()) }
    >
      <Assignment/>
    </IconButton>
  </span>

const mapStateToProps = ({ dispatch }) => {
  return {
    dispatch
  }
}

module.exports = connect(mapStateToProps)(AppliedButton)
