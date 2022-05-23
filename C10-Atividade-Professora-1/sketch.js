var notas = [10,9,7,8];

var soma = 0;
var media = 0;

function calcular_media(){
  soma = notas[0] + notas[1] + notas[2] + notas[3];
  media = soma/notas.length;
  console.log(media);
}



function setup() {
  createCanvas(400, 400);
  calcular_media();
}

function draw() {
  background(220);
}