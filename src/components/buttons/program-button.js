const React = require('react');
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Equalizer from 'material-ui/svg-icons/av/equalizer';
const styles = require('./styles')


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
