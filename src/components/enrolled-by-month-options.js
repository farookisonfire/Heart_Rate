const Highcharts = require('highcharts')

// module.exports = {
//     title: {
//         text: 'Enrollment by Month'
//     },
//     xAxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     },
//     yAxis: {
//         title: {
//             text: 'Enrollees'
//         }
//     },
//     series: [{
//         name: 'Jane',
//         data: [1, 0, 4,1, 0, 4,1, 0, 4, 4]
//     }, {
//         name: 'John',
//         data: [5, 7, 3,5, 7, 3,5, 7, 3,5, 7, 3]
//     }]
// }


module.exports = function enrolledByMonthChart(data) {
  return $(function () {
    var myChart = Highcharts.chart('container', {
        title: {
            text: 'Enrollment by Month'
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
            name: '2016',
            data: data
        }]
    });
  });
}
