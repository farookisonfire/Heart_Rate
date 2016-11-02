const React = require('react');
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';
const styles = require('./styles');
const { goHome } = require('../../actions')
const { connect } = require('react-redux')

const HomeButton = ({ dispatch }) =>
  <span>
    <IconButton
      tooltip="Home"
      iconStyle={styles.smallIcon}
      style={styles.small}
      onTouchTap={ () => dispatch(goHome()) }
    >
      <Home/>
    </IconButton>
  </span>

const mapStateToProps = ({ dispatch }) => {
  return {
    dispatch
  }
}

module.exports = connect(mapStateToProps)(HomeButton)
