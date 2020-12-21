var randomnumber=(Math.floor( Math.random()*5));
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var CarH = 100;
var CarW = 100;
var CarX = 10;
var CarY = 10;

function load() {
    bacgroungimg = new Image();
    Carimg = new Image();
    Carimg.src = "Car.png";
    Carimg2.src = "Car2.png";
    bacgroungimg.onload = uploadBackground;
    Carimg.unload = uploadCar;
}
function uploadRover() {
    ctx.drawImage(Carimg, CarX, CarY, CarW, CarH);
    console.log("DrawRover")
}