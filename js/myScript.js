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

$('.box1').animate({left: 200}, 1000);
// Chained animation
$('.box2').animate({left: 200, 
    top: 100,
    left: 300,
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
    height: 20,
}).animate({
    top: 70,
    left: 10,
    width: 50,
    height: 70,
});

});


/*==============FORM PAGE =======================================================*/
/*(function(){
            //'use strict';
          
            var slider = document.getElementById('slider');
            var label = document.getElementById('label');
            var btn = document.getElementById('btn');
            var result = document.getElementById('result');
            var numbers = document.getElementById('numbers');
            var symbols = document.getElementById('symbols');
            
            function getPassword(){
                var seed_letters = 'abcdefghijklmnopqrstuvwzyx';
                var seed_numbers = '`123456789';
                var seed_symbols = '!@#$%^&*()_+';
                var seed;
                
                var len = slider.value;
                var pwd = '';
                
                seed = seed_letters + seed_letters.toUpperCase();
                if (numbers.checked === true) {
                    seed += seed_numbers;
                }
                
                if (symbols.checked) {
                    seed += seed_numbers;
                }
                
                
               // for (var i = 0; i < len; i++){
                 //   pwd += seed[Math.floor(Math.random() * seed.length)];
               // }
              //   result.value = 'fjkdjfjkasjdfk';
            }
            
                    slider.addEventListener('change',function() {
                        label.innerHTML = this.value;
                    });

                    btn.addEventListener('click',function() {
                        getPassword();
                       // result.value = 'fjkdjfjkasjdfk';
                    });

                    result.addEventListener('click',function() {
                        this.select();
                        
                        getPassword();//uchigawa ni ireta kore
                    });

                    
            
        })();*/
