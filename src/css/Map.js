import React, { Component } from 'react';

class GoogleMap extends Component {
  render(){
		return(
			<html>
  <head>
    <style>
       #map {
        height: 400px;
        width: 100%;
       }
    </style>
  </head>
  <body>
    <h3>My Google Maps Demo</h3>
    <div id="map"></div>
    <script>
      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9J1eb42KnsaYK8VQU1IugGM_E2_HSfQ4&callback=initMap">
    </script>
  </body>
</html>
		)
	}
}

export default GoogleMap
