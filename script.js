$('#location-button").click(function(){
    if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    $.get("http://maps.googleapis.com/maps/api/geocode/json?lating="+ position.coords.latitude +"," + position.coords.longitude +"&sensor=false", function(data) {
      console.log(data);
  })
    
    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," position.coords.longitude + "&zoom=13&size=800x480&sensor=false"; $('#output').html(img);
    $('output').html(img);
    });
    else
    console.log("geolocation is not supported");
    });