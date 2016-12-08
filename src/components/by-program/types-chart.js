const React = require('react')
const Highcharts = require('highcharts');
const drilldown = require('highcharts-drilldown')

exports.typesChart = (data) => {

  return $(function () {
      // Create the chart
      Highcharts.chart('types-chart', {
          chart: {
              type: 'pie'
          },
          title: {
              text: 'Browser market shares. January, 2015 to May, 2015'
          },
          subtitle: {
              text: 'Click the slices to view versions. Source: netmarketshare.com.'
          },
          plotOptions: {
              series: {
                  dataLabels: {
                      enabled: true,
                      format: '{point.name}: {point.y:.1f}'
                  }
              }
          },

          tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> enrolled <br/>'
          },
          series: [{
              name: 'Brands',
              colorByPoint: true,
              data: [{
                  name: 'Health-Innovation',
                  y: data.totalHI,
                  drilldown: 'Health-Innovation'
              }, {
                  name: 'Youth-Empowerment',
                  y: data.totalYE,
                  drilldown: 'YouthEmpowerment'
              }]
          }],
          drilldown: {
              series: [{
                  name: 'Health-Innovation',
                  id: 'Health-Innovation',
                  data: [
                      ['2 week', data.twoWeekHI],
                      ['4 week', data.fourWeekHI]
                  ]
              }, {
                  name: 'Youth-Empowerment',
                  id: 'YouthEmpowerment',
                  data: [
                      ['1 week', data.oneWeekYE],
                      ['2 week', data.twoWeekYE],
                      ['4 week', data.fourWeekYE]
                  ]
              }]
          }
      });
  });
}
