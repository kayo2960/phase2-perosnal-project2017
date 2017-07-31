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



/*========================================animation contorller===========================================*/
          var myGamePiece;
var myUpBtn;
var myDownBtn;
var myLeftBtn;
var myRightBtn;

function startGame() {
    myGamePiece = new component(30, 30, "#FF4500", 10, 120);
    myUpBtn = new component(30, 30, "#4169E1", 50, 10);    
    myDownBtn = new component(30, 30, "#4169E1", 50, 70);    
    myLeftBtn = new component(30, 30, "#4169E1", 20, 40);    
    myRightBtn = new component(30, 30, "#4169E1", 80, 40);                
    myGameArea.start();
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1280;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousedown', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener('mouseup', function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })
        window.addEventListener('touchstart', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener('touchend', function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.clicked = function() {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var clicked = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            clicked = false;
        }
        return clicked;
    }
}

function updateGameArea() {
    myGameArea.clear();
    if (myGameArea.x && myGameArea.y) {
        if (myUpBtn.clicked()) {
            myGamePiece.y -= 1;
        }
        if (myDownBtn.clicked()) {
            myGamePiece.y += 1;
        }
        if (myLeftBtn.clicked()) {
            myGamePiece.x += -1;
        }
        if (myRightBtn.clicked()) {
            myGamePiece.x += 1;
        }
    }
    myUpBtn.update();        
    myDownBtn.update();        
    myLeftBtn.update();        
    myRightBtn.update();                                
    myGamePiece.update();
}
