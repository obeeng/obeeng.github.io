function initGoogleMap() {

  jQuery('.google-map').each(function(id){
    var elm     = jQuery(this),
        containerId = null,
        latlng  = null,
        map     = null,
        marker  = null,
        options = {
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

    // Skip if no latlng attributes are present
    if (!elm.attr('data-lat') || !elm.attr('data-lng')) return;

    // Generate id if not present
    if (elm.attr('id')) {
      containerId = elm.attr('id');
    } else {
      containerId = 'google-map-' + id;
    }
    
    // Setup Google map
    latlng = new google.maps.LatLng(elm.attr('data-lat'), elm.attr('data-lng'));
    options.center = latlng;
    map = new google.maps.Map(document.getElementById(containerId), options);
  
    // Set marker on center
    marker = new google.maps.Marker({position: latlng});
    marker.setMap(map);
  });
}
  
function loadGoogleMap() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initGoogleMap";
  document.body.appendChild(script);
}
  
window.onload = loadGoogleMap;
