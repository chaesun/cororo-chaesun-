//function goToNextPage() {

  //var nextPageURL = '../p12/index.html'; // 여기에 다음 페이지의 URL을 입력하세요

  // 새로운 페이지로 이동
 //window.location.href = nextPageURL;}

// body 요소에 클릭 이벤트 리스너 등록
//document.addEventListener('click', goToNextPage);


function preload(){
  // setup()과 draw()를 호출하기에 앞서,
  // assets 파일 경로에 .ttf 또는 .otf 폰트가 저장 및 로드되었는지 확인하세요. 
  font = loadFont('../assets/RobotoMono-Bold.ttf');
  
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');
    
}

function windowResized() {
  var reCanvas = resizeCanvas(windowWidth, windowHeight);
    reCanvas.parent('p5-canvas');
    background('black');
}

function draw() {
  push();
  translate(windowWidth * 0.5, windowHeight * 0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 60, 120, 30);
  pop();

  push()
  translate((windowWidth * 0.5)-35, windowHeight * 0.5);
  fill('black');
    textSize(18);
    textFont('RobotoMono-Bold');
    text('the end',0, 0);
    textAlign(CENTER, CENTER);
    pop()
  }
   
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill('orange');
  stroke('black')
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
