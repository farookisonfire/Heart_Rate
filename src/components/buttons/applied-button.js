const React = require('react');
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Assignment from 'material-ui/svg-icons/action/assignment';
const styles = require('./styles')


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
