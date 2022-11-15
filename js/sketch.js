function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    textSize(20)
    var flag = true
}

function draw() {
    background(220);
    fill(255, 255, 0)
    circle(width/2,height/2,200)
    fill(255, 0,0)
    circle(365, 375 , 50)
    fill(255, 0,0)
    circle(425, 375 , 50)
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
if (mouseX < width/2)
{
    fill(mouseX/2)
text('left',mouseX, height/2)
arc(400, 450, 80, 80, 0, PI , PIE);
}
else{
    fill(mouseX/2)
text('right' ,mouseX, height/2)
arc(400, 450, 80, 80, PI, 0 , PIE);
    }
console.log(mouseX)
}

