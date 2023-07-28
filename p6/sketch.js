function preload(){
    img01 = loadImage('../assets/movie2.png');
    img02 = loadImage('../assets/movie3.png');
    img03 = loadImage('../assets/movie4.png');
    img04 = loadImage('../assets/movie5.png');
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');
    background('black');
}

function windowResized() {
    var reCanvas = resizeCanvas(windowWidth, windowHeight);
      reCanvas.parent('p5-canvas');
      background('black');
  }

function draw() {    
    frameRate(60);
    erase()
    colorMode(RGB);
    stroke('orange');
    strokeWeight(10);
    point(pmouseX, pmouseY);
    point(movedX, movedY);
    noErase()
}
