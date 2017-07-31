// JavaScript File
/*global $*/ 

function changeImage() {
var image = document.getElementById('myImage');
  if (image.src.match("tuna")) {
    image.src="img/tunas.png";
  }else {
    image.src="img/tuna.png";
 }
}


/*global google map js*/
function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 40.730610, lng: -73.935242 },
          scrollwheel: false,
          zoom: 10
        });
      }
 

      
/* fish html*/
$(document).ready(function(){
  


/*global ctx*/
/*global onload*/
/*/////////////////animation/////////////////////////////*/

$('.box1').animate({left: 400}, 1000);
// Chained animation
$('.box2').animate({ 
    top: 100,
    left: 100,
    width: 100,
    height: 100,
}).animate({
    top: 50,
    left: 300,
    width: 50,
    height: 50,
}).animate({
    top: 150,
    left: 300,
    width: 400,
    height: 120,
}).animate({
    top: 70,
    left: 10,
    width: 50,
    height: 50,
});

});



