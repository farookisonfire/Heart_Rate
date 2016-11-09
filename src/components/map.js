import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
const { connect } = require('react-redux')

const position = [46.3, -0.1];
const TestComponent = ({ coordinates }) =>
    <Map center={position} zoom={13} style={{height:'200px'}}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
        </Popup>
      </Marker>
    </Map>


var geocoder = new google.maps.Geocoder();


window.getCoordinates = (address, callback) => {
  geocoder.geocode({address: address}, function(results, status){
    callback(results)
  })
}

/*getCoordinates( 'ucla', (results) => {
 console.log('in callback')
 console.log(typeof results)
 console.log(results)
 if (typeof results[0] !== 'undefined') {
   console.log('coordinates found')
   var coordinates;
   var lat = results[0].geometry.location.lat();
   var long = results[0].geometry.location.lng();
   coordinates = [lat, long]
   console.log(coordinates)
   allCoordinates.push(coordinates)
 } else {
   console.log('coordinates not found')
 }
})*/

const mapStateToProps = ({ enrolledByProgram }) => {
  var coordinates;
  enrolledByProgram.map(enrollee => {
    getCoordinates(enrollee.university, (results) => {
        console.log(results)
      })
    })
    return {
      coordinates
    }
}


module.exports = connect(mapStateToProps)(TestComponent)




/*var geocoder = new google.maps.Geocoder();


const getCoordinates = (address, callback) => {
  var coordinates;
  geocoder.geocode({address: address}, function(results, status){
    console.log('this is the result')
    console.log(results)
    var lat = results[0].geometry.location.lat();
    var long = results[0].geometry.location.lng();
    coordinates = [lat,long]
    callback(coordinates)
    })
  }*/
