const Highcharts = require('highcharts')
const React = require('react')

exports.enrolledByMonthChart = (data2015, data2016) => {
  return $(function () {
    var myChart = Highcharts.chart('container', {
        title: {
          text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Enrollees'
            }
        },
        series: [{
            name: '2015',
            data: data2015
        },
        {
          name: '2016',
          data: data2016
        }
      ]
    });
  });
}

exports.enrolledByMonthChartTitle = (
  <h4>Enrolled By Month</h4>
)
