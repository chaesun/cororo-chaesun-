function goToNextPage() {

  var nextPageURL = '../p11/index.html'; // 여기에 다음 페이지의 URL을 입력하세요

  // 새로운 페이지로 이동
  window.location.href = nextPageURL;
}

// body 요소에 클릭 이벤트 리스너 등록
//document.addEventListener('click', goToNextPage);


function preload(){
}

let slider;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');
   
    sliderR = createSlider(0, 255, 0,0);
    sliderR.position(15, 100);
    sliderR.style('width', '100px');

    sliderG = createSlider(0, 255, 0,0);
    sliderG.position(15, 130);
    sliderG.style('width', '100px');

    sliderB = createSlider(0, 255, 0,0);
    sliderB.position(15, 160);
    sliderB.style('width', '100px');

    checkbox01 = createCheckbox('check', false);
    checkbox01.changed(myCheckedEvent);
    checkbox01.position(windowWidth-50,600);
    checkbox01.style('white');
    checkbox02 = createCheckbox('check', false);
    checkbox02.changed(myCheckedEvent);
    checkbox02.position(windowWidth-50,660);
    checkbox03 = createCheckbox('check', false);
    checkbox03.changed(myCheckedEvent);
    checkbox03.position(windowWidth-50,720);
    checkbox04 = createCheckbox('check', false);
    checkbox04.changed(myCheckedEvent);
    checkbox04.position(windowWidth-50,780);
    checkbox05 = createCheckbox('check', false);
    checkbox05.changed(myCheckedEvent);
    checkbox05.position(windowWidth-50,840);
    checkbox06 = createCheckbox('check', false);
    checkbox06.changed(goToNextPage);
    checkbox06.position(windowWidth-50,840);

    let inp = createInput('');
    inp.position(0, 0);
    inp.size(100);
    inp.input(myInputEvent);
}


function windowResized() {
    var reCanvas = resizeCanvas(windowWidth, windowHeight);
      reCanvas.parent('p5-canvas');
      background('black');
  }


  function draw() {
    button = createButton('click me');
    button.position(20, 20);
    button.mousePressed(ChangeBgColor);

  }

  function myInputEvent(){
    console.log('you are typing: ', this.value());
    return(value());
  }
  


  function ChangeBgColor(){
    let r = sliderR.value();
    let g = sliderG.value();
    let b = sliderB.value();
    background(r,g,b);
  }


  mouse();
function mouse(){
  stroke('white');
strokeWeight(1);
var y2 = windowHeight;
var x2= windowWidth;
line(mouseX, 0, mouseX, y2);
line(0, mouseY, x2, mouseY);
}
  
function myCheckedEvent() {
  if (checkbox.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}