function goToNextPage() {

  var nextPageURL = './p5/index.html'; // 여기에 다음 페이지의 URL을 입력하세요

  // 새로운 페이지로 이동
  window.location.href = nextPageURL;
}

// body 요소에 클릭 이벤트 리스너 등록
document.addEventListener('click', goToNextPage);

let font,
  fontsize = 32;

function preload() {
  // setup()과 draw()를 호출하기에 앞서,
  // assets 파일 경로에 .ttf 또는 .otf 폰트가 저장 및 로드되었는지 확인하세요. 
  font = loadFont('assets/RobotoMono-Bold.ttf');
}


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
    i= frameCount
    a= 1080-(frameCount % 37)*29;
    spiral();
    field();
    randompointtext();
    orange();
   
}


function field() {
  fill('yellowgreen');
    noStroke();
    erase();
    triangle(x-8, y+240, x, y, x+8, y+240);
    noErase();
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
      circle(sin((frameCount))*windowWidth, cos((frameCount - i))*windowHeight,55 - i);
    pop()
  }
}

function spiral() {
  r=(i*random)%255
  g=(a*8)%255
  b= a+i
  spiralcolor= color('rgb(r,g,b)');
  fill(210,120,255,50);
  strokeWeight(1);
  stroke('magenta');
  arc(a*2, a*8, a*4, a*50, PI, PI + QUARTER_PI);
  fill(255,255,190,100);
  arc(10+a, a+3, a+100, a-1000, a, HALF_PI);
  fill(102,10,255,10);
  stroke('yellow');
  arc(a*2-100, a*3, a*9, a*6, PI + QUARTER_PI, TWO_PI);
  noFill();
  strokeWeight(0.25);
  stroke('white');
  arc(a, a*2, a*3, a*4, QUARTER_PI, PI);
}

function randompointtext() {
  if (mouseX<windowWidth/2 && mouseY<windowHeight/2) {
  txt= 'hi'; 
  fill('white');
}
  else if (mouseX>=windowWidth/2 && mouseY<windowHeight/2) {
  txt= 'cororo'; 
  fill('white');}
  else if (mouseX<windowWidth/2 && mouseY>=windowHeight/2) {
  txt= 'orange';
  fill('orange'); }
  else if (mouseX>=windowWidth/2 && mouseY>=windowHeight/2) {
  txt= 'p5.js';
  fill('white'); }
  textSize(18);
  textFont('RobotoMono-Bold');
  text(txt,mouseX, mouseY)
}

