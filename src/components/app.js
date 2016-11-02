const React = require('react')
const ReactDOM = require('react-dom')
const RootComponent = require('./root-component')
const store = require('../store')
const { Provider } = require('react-redux')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store = {store}>
    <MuiThemeProvider>
      <div>
        <RootComponent/>
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
