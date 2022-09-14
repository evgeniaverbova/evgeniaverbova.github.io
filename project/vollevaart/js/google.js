// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to
// (0,32) to correspond to the base of the flagpole.



/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */

var beaches = [
  [' ', 46.257195, 76.932440, 1],
  [' ', 47.123133, 86.776179, 2],
  [' ', 52.135640, 98.903863, 3]
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
	url: 'img/marker-1.png',
	// This marker is 20 pixels wide by 32 pixels tall.
	size: new google.maps.Size(53, 48),
	// The origin for this image is 0,0.
	origin: new google.maps.Point(0,0),
	// The anchor for this image is the base of the flagpole at 0,32.
	anchor: new google.maps.Point(13, 46)
  };

	var image2 = {
	url: 'img/marker-2.png',
	// This marker is 20 pixels wide by 32 pixels tall.
	size: new google.maps.Size(53, 48),
	// The origin for this image is 0,0.
	origin: new google.maps.Point(0,0),
	// The anchor for this image is the base of the flagpole at 0,32.
	anchor: new google.maps.Point(13, 46)
  };

  	var image3 = {
	url: 'img/marker-3.png',
	// This marker is 20 pixels wide by 32 pixels tall.
	size: new google.maps.Size(53, 48),
	// The origin for this image is 0,0.
	origin: new google.maps.Point(0,0),
	// The anchor for this image is the base of the flagpole at 0,32.
	anchor: new google.maps.Point(13, 46)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
	  coords: [1, 1, 1, 140, 140, 140, 140 , 1],
	  type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
	var beach = locations[i];
	var myLatLng = new google.maps.LatLng(beach[1], beach[2]);

	if (i === 0) {
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image,
			shape: shape,
			title: beach[0],
			zIndex: beach[3]
		});

        getosit1 = marker.getPosition()

        google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(8);
        map.setCenter(getosit1);

        // attachSecretMessage(marker, 1);
        });

	} else if (i === 1) {
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image2,
			shape: shape,
			title: beach[0],
			zIndex: beach[3]
		});
      
        getosit2 = marker.getPosition()

        google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(8);
        map.setCenter(getosit2);

        // attachSecretMessage(marker, 2);
        });
      
	} else {
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image3,
			shape: shape,
			title: beach[0],
			zIndex: beach[3]
		});
      
        getosit3 = marker.getPosition()

        google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(8);
        map.setCenter(getosit3);

		//marker.setTitle((i + 1).toString());
		// attachSecretMessage(marker, 3);


        });
	}
attachSecretMessage(marker, i);

  }
}


function attachSecretMessage(marker, num) {
	var message = ['<div class="google-marker-box"><p class="marker-address">г. Алматы, пр-т Сейфулина,</p><p class="marker-tell">тел./факс: 8(727) 272-20-90</p><a class="marker-mail" href="mailto:example@gmailc.om">E-mail:<span>example@gmailc.om</span></a></div>', '<div class="google-marker-box"><p class="marker-address">г. Алматы, пр-т Сейфулина,</p><p class="marker-tell">тел./факс: 8(727) 272-20-90</p><a class="marker-mail" href="mailto:example@gmailc.om">E-mail:<span>example@gmailc.om</span></a></div>', '<div class="google-marker-box"><p class="marker-address">г. Алматы, пр-т Сейфулина,</p><p class="marker-tell">тел./факс: 8(727) 272-20-90</p><a class="marker-mail" href="mailto:example@gmailc.om">E-mail:<span>example@gmailc.om</span></a></div>'];
	var infowindow = new google.maps.InfoWindow({
		content: message[num]
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(marker.get('map'), marker);
	});
}

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 4,
		scrollwheel: false,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(52.908902047770276,88.330078125), // center

		// How you would like to style the map. 
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#eee8dd"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#eee8dd"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#97b597"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#e3d2bb"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#d1b38b"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#416c95"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"saturation":"-61"},{"hue":"#ff9000"},{"lightness":"-14"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#eee8dd"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#674110"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"hue":"#ff9000"},{"saturation":"-61"},{"lightness":"5"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f2e5d6"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#674110"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#cfe9f0"}]}]
	};

	// Get the HTML DOM element that will contain your map 
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);
	
	setMarkers(map, beaches);
	// // Let's also add a marker while we're at it
	// var marker = new google.maps.Marker({
	// 	position: new google.maps.LatLng(40.6700, -73.9400),
	// 	map: map,
	// 	title: 'Snazzy!'
	// });
}