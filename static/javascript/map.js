var map;
    function initialize() {
        var mapOptions = {
            center: { lat: 40.500, lng: -74.452},
            zoom:16 
        };
    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    for (var crime in crimes) {
       //change later to for loop
       crime = crimes[crime]
       var latLng = new google.maps.LatLng(crime.lat, crime.lng);
       new google.maps.Marker({
           position: latLng,
           map: map,
           title: crime.descr
       }); 
       console.log("marker added");
    }
   }
google.maps.event.addDomListener(window, 'load', initialize);

