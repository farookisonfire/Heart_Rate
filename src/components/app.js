const React = require('react')
const ReactDOM = require('react-dom')
const RootComponent = require('./root-component')
const store = require('../store')
const { Provider } = require('react-redux')


ReactDOM.render(
  <Provider store = {store}>
    <div>
      <RootComponent/>
    </div>
  </Provider>,
  document.getElementById('root')
)
