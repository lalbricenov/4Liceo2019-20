//function indica que lo que sigue
// es una función
// setup es el nombre de la función
// () indica que no requiere argumentos
function setup(){
    // se llama una vez al inicio
    createCanvas(400, 400);
}

function draw(){
    // se llama varias veces por segundo
    background(120,200,50);
    var x = 200;
    var y = 200;
    var r = 15;
    dibujarTortuga(x,y,15);
    // moviendo la tortuga a la derecha 50px
    x = x + 50;
    
    dibujarTortuga(x,y,30);
    dibujarTortuga(100,100,40);
    dibujarTortuga(300,y,5);
    
}

function dibujarTortuga(posX, posY, r){
    circle(posX, posY-r, r);
    circle(posX, posY, 2*r);
}