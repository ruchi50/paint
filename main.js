 canvas = document.getElementById("canvas_new");
ctx = canvas.getContext("2d");
var last_position_x , last_position_y;
color = "blue" ;
width_of_line = 2 ;
var width =  screen.width;
new_width = screen.width - 70 ;
new_height = screen.height - 300 ;


if (width < 992)
{
    document.getElementById("canvas_new").width = new_width ;
    document.getElementById("canvas_new").height = new_height ;
    document.body.style.overflow = "hidden" ;
} 
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    console.log("my_touchstart") ;
    color = document.getElementById("color").value ; 
    width_of_line = document.getElementById("width_line").value ; 
   
   last_position_x = e.touches[0].clientX - canvas.offsetLeft  ;
   last_position_y = e.touches[0].clientY - canvas.offsetTop   ;

}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
   
 currentpositiontouchx = e.touches[0].clientX - canvas.offsetLeft ; 
 currentpositiontouchy = e.touches[0].clientY - canvas.offsetTop ;
 console.log("my touch move");

    ctx.beginPath();
    ctx.strokeStyle = color ; 
    ctx.lineWidth = width_of_line ;
    console.log("last position of x and y coordinates =  ");
    console.log("x =  " + last_position_x + "y =   " + last_position_y);
    ctx.moveTo(last_position_x, last_position_y);
    console.log("current position of x and y coordinates =  ");
    console.log("x =  " +currentpositiontouchx  + "y =   " + currentpositiontouchy );
    ctx.lineTo(currentpositiontouchx, currentpositiontouchy );
    ctx.stroke();
 
 
   
 last_position_x = currentpositiontouchx  ;
 last_position_y = currentpositiontouchy ;
}

function clear_area () {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}