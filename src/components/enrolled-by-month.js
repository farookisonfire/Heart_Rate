const React = require('react')
// const Highcharts = require('highcharts')
const enrolledByMonthChart = require('./enrolled-by-month-options')

var data = [25, 25, 20, 20, 20, 10, 5, 10, 15, 30, 40, 40, 30]

const EnrolledByMonth = () =>{
    enrolledByMonthChart(data)
    return (
      <div>
        <div id="container"></div>
      </div>
      )}

  module.exports = EnrolledByMonth
