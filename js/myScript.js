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
 
      
// fish html
$(document).ready(function(){
  
    /* $(function(){
	$("button#fadeIn").click(function(){
		$("img:not(:animated)").fadeIn("slow");
	});
	$("button#fadeOut").click(function(){
		$("img:not(:animated)").fadeOut("slow");
	});
});*/
  
    $('#slide').click(function(){
        $('.slide-box').effect('slide',{direction: 'right'}, 'slow');
    });
    
    $(".slide-box").click(function(){
        $(this).effect('explode',{pieces: 18},'slow');
    });
    
  /*$('#show-text').click(function(){
        $('#hidden-text').fadeToggle('slow')
    });*/
   
});

