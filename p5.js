function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');
    background('ivory');
}
  
function windowResized() {
  var reCanvas = resizeCanvas(windowWidth, windowHeight);
    reCanvas.parent('p5-canvas');
    background('ivory');
}

  function draw() {
   width= windowWidth
   height= windowHeight
    x = random(width);
    y = random(height/3)+height/2.2;
    fill('yellowgreen');
    noStroke();
    erase();
    triangle(x-8, y+240, x, y, x+8, y+240);
    noErase();
    orange();
  }

function orange() {
  background(0,0,0,0);
  for(var i = 0; i < 50; i++){
    push()
    if (frameCount % 2 === 0) {
      fill('orange');
    }
    else {
      fill('pink');
    }
      noStroke();
      circle(cos((frameCount))*windowWidth, sin((frameCount + i))*windowHeight,60 - i);
    pop()
  }
}