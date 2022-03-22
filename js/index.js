(function ($) {
    "use strict";

    var lat = 48.39497;
    var lng = 10.94415

	// Creating map options
	var mapOptions = {
		center: new L.LatLng(lat, lng),
		zoom: 11
	}

	// Creating a map object
	var map = new L.map('map', mapOptions);

	// Creating a Layer object
	var layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');


	// Adding layer to the map
	map.addLayer(layer);

	L.circle([lat, lng], 6000).addTo(map);

	var marker = L.marker([lat, lng]);
	marker.addTo(map)

	    
})(jQuery);