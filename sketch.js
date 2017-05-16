function setup() {
createCanvas(400,400);
    print("setup funtion!");
}

function draw() {
  background(250,0,250);
    ellipse(200,200,50,50);
    rect(50,100,75,50);
    rect(270,100,75,50);
    rect(150,300,100,120);
    line(300,20,1,1);
    line(300,30,1,1);
    line(300,40,1,1);
    line(300,50,1,1);
    console.log("draw function!");
}