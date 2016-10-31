const Highcharts = require('highcharts')
const React = require('react')

exports.enrolledByProgramChart = (enrollmentProgram1, enrollmentProgram2, enrollmentProgram4, enrollmentProgram2Health, enrollmentProgram4Health) => {
  return $(function () {
      $('#enrolled-by-program').highcharts({
          chart: {
              type: 'column',
              marginTop: '70'
          },
          title: {
              text: ''
          },
          xAxis: {
              categories: ['May 22 - May 26', 'May 29 - June 2', 'June 5 - June 9', 'June 12 - June 16', 'June 19 - June 23', 'June 26 - June 30', 'July 3 - July 7', 'July 10 - July 14', 'July 17 - July 21', 'July 24 - July 28', 'July 31 - Aug 4', 'Aug 7 - Aug 11', 'Aug 14 - Aug 18', 'Aug 21 - Aug 25']
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Total Enrolled'
              },
              stackLabels: {
                  enabled: true,
                  style: {
                      fontWeight: 'bold',
                      color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                  }
              }
          },
          legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',

            shadow: false
          },
          tooltip: {
              headerFormat: '<b>{point.x}</b><br/>',
              pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
          },
          plotOptions: {
              column: {
                  stacking: 'normal',
                  dataLabels: {
                      enabled: true,
                      color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                  }
              }
          },
          series: [{
              name: 'YE - 1 week',
              data: enrollmentProgram1
          }, {
              name: 'YE - 2 week',
              data: enrollmentProgram2
          }, {
              name: 'YE - 4 week',
              data: enrollmentProgram4
          },
          {
              name: 'HI - 2 week',
              data: enrollmentProgram2Health
          },
          {
              name: 'HI - 4 week',
              data: enrollmentProgram4Health
          }
          ]
      });
  });
}

exports.enrolledByProgramTitle = (
  <h4>Enrolled by Program and Date</h4>
)
