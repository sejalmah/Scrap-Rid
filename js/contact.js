var x = document.getElementById("demo");
var l,i;
function getLocation() {
  if (navigator.geolocation) {             
    navigator.geolocation.getCurrentPosition(showPosition);      
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position)          
 {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
   l=position.coords.latitude;
 i= position.coords.longitude;
 
initMap();
}





function initMap()        
 {
  var mapOptions = {zoom: 14,center: { lat: 12.8231, lng: 80.0442 }};       
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);    
  var marker = new google.maps.Marker({position: { lat:12.8231 , lng:80.0442 } ,  map: map });      



  
  var infowindow = new google.maps.InfoWindow({content: "<p>Marker Location:" + marker.getPosition() + "</p>"});

  google.maps.event.addListener(marker, "click", function() {infowindow.open(map, marker);});    
}