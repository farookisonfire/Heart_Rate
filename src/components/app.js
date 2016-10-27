const React = require('react')
const ReactDOM = require('react-dom')
const Welcome = require('./welcome')

ReactDOM.render(
  <div>
    <Welcome/>
  </div>,
  document.getElementById('root')
)


fetch('/api/data')
  .then(res => {
    return res.json()
  }).then(res => {
     console.log(res)
  })
