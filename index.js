var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw(){
ctx.fillRect(100,100,100,100);
}

window.requestAnimationFrame(draw);
let game = setInterval(draw,20);//вызов функции каждые 20мс
