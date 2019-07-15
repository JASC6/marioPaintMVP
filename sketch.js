function setup() {
    createCanvas(500,500);
    background(100,100,100);
}

function mouseIsDragged(){
    let z = random(0,355)
    let a = random(0,355)
    let b = random(0,380)
    fill(z,a,b)
    let x = random(35,100)
    let y = random(21,120)
    ellipse(mouseX,mouseY,x,y);

}

function draw(){
    mouseIsDragged();
}
