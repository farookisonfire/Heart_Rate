const React = require('react')
const ReactDOM = require('react-dom')
const RootComponent = require('./root-component')

ReactDOM.render(
  <div>
    <RootComponent/>
  </div>,
  document.getElementById('root')
)


fetch('/api/data')
  .then(res => {
    return res.json()
  }).then(res => {
     console.log(res)
  })
