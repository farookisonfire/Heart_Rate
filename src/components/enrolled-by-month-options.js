const Highcharts = require('highcharts')
const React = require('react')

exports.enrolledByMonthChart = (data2015, data2016) => {
  return $(function () {
    var myChart = Highcharts.chart('enrolled-by-month', {
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


Highcharts.theme = {
    colors: ['#23CE6B', '#75DDDD', '#6A7FDB', '#E08DAC', '#FFAD05', '#64E572',
             '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: '#FDFEFE',
        opacity:'1',
    },
    title: {
        style: {
            color: '#000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },

    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
