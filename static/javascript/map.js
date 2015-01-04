var map;
   function initialize() {
       var mapOptions = {
           center: { lat: 40.500, lng: -74.452},
           zoom:16 
       };
   map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
   }
google.maps.event.addDomListener(window, 'load', initialize);

