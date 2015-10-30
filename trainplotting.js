var trainplotting = (function () {
	'use strict';
	var map;
	return {

		initialise: function () {
			console.log('init');
		},
		maps: {
			initialise: function () {
				map = new google.maps.Map(
					document.getElementById('map'),
					{
						center: {
							lat: 54.6314868,
							lng: -4.1295728
						},
						zoom: 6
					}
				);
				trainplotting.maps.plotMarkersToMap();	
			},
			addMarker: function (markerData) {
				var marker = new google.maps.Marker(
					{
						position: {
							lat:markerData.lat,
							lng:markerData.lng
						},
						map: map
					}
				);
			},
			plotMarkersToMap: function () {
				// for (var i = 0; i < trainplotting.Data.length; i++) {
				for (var i = 0; i < 10; i++) {
					trainplotting.maps.addMarker({
						lat:trainplotting.Data[i].lat,
						lng:trainplotting.Data[i].lng
					});
				};
				
			}


		}

	}
}());
trainplotting.initialise();