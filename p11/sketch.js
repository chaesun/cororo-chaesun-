function goToNextPage() {

  var nextPageURL = '../p12/index.html'; // 여기에 다음 페이지의 URL을 입력하세요

  // 새로운 페이지로 이동
  window.location.href = nextPageURL;
}

// body 요소에 클릭 이벤트 리스너 등록
//document.addEventListener('click', goToNextPage);


function preload(){
}

let detailX;
let nextpage;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('p5-canvas');
    
  detailX = createSlider(3, 24, 3);
  detailX.position(10, windowHeight-30);
  detailX.style('width', '80px');

  button = createButton('click me');
  button.position(108, windowHeight-30);
  button.mousePressed(savecanvas);

  nextpage= createButton('go next');
  nextpage.position(182, windowHeight-30);
  nextpage.mousePressed(goToNextPage);

}

function windowResized() {
  var reCanvas = resizeCanvas(windowWidth, windowHeight);
    reCanvas.parent('p5-canvas');
    background('black');
}

function draw() {
  background('black');
  rotateY(millis() / 1000);
  cylinder(50, 150, detailX.value(), 1);
 
}


function savecanvas(){  
  saveCanvas(canvas, 'cylinder', 'jpg');
}

