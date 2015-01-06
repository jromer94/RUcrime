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

        var contentString =
        '<h3>' + crime.descr +'</h3>'+
        '<p>Date: ' + crime.date +
        '</p>'+
        '<p> <a href="' + crime.link + '">'+ 'More Info' +
        '</a></p>'
       
        var latLng = new google.maps.LatLng(crime.lat, crime.lng);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: crime.descr
        }); 
       
        marker.info = new google.maps.InfoWindow({
            content: contentString
        });      


        console.log("marker added");
    
        google.maps.event.addListener(marker, 'click', function() {
           this.info.open(map, this);
        });
    }
}
google.maps.event.addDomListener(window, 'load', initialize);

function jumpToCampus(campus) {
    if(campus === "B"){
        map.panTo(new google.maps.LatLng(40.523328, -74.461356));
        console.log("jumped to busch");
    } else if(campus === "L"){
        map.panTo(new google.maps.LatLng(40.522790, -74.436963));
        console.log("jumped to livi");
    } else if(campus === "CD"){
        map.panTo(new google.maps.LatLng(40.482271, -74.434090));
        console.log("jumped to cook");
    } else {
        map.panTo(new google.maps.LatLng(40.500, -74.452));
        console.log("jumped to the ave");
    }
}
