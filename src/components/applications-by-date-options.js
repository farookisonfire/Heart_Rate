const React = require('react')
const Highcharts = require('highcharts')


const newData = [
  [Date.UTC(2011,5,4),20],
  [Date.UTC(2013,5,5),6],
  [Date.UTC(2013,5,6),120],
  [Date.UTC(2015,5,2),1],
  [Date.UTC(2016,5,3),40]
]

exports.applicationsByDateChart = (chartData) => {
  return $(function () {


          Highcharts.chart('applications-by-date', {
              chart: {
                  zoomType: 'x'
              },
              title: {
                  text: ''
              },
              subtitle: {
                  text: document.ontouchstart === undefined ?
                          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
              },
              xAxis: {
                  type: 'datetime'
              },
              yAxis: {
                  title: {
                      text: '# of Apps'
                  }
              },
              legend: {
                  enabled: false
              },
              plotOptions: {
                  area: {
                      fillColor: {
                          linearGradient: {
                              x1: 0,
                              y1: 0,
                              x2: 0,
                              y2: 1
                          },
                          stops: [
                              [0, Highcharts.getOptions().colors[0]],
                              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                          ]
                      },
                      marker: {
                          radius: 2
                      },
                      lineWidth: 1,
                      states: {
                          hover: {
                              lineWidth: 1
                          }
                      },
                      threshold: null
                  }
              },

              series: [{
                  type: 'area',
                  name: 'USD to EUR',
                  data: chartData
              }]
          });
       // here
  });
}

exports.applicationsByDateTitle = (
  <h4>Applications By Date</h4>
)
