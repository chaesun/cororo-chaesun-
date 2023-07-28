function preload(){
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');
    background('black');
     // 색상 리스트를 초기화하는 함수 호출
}

function windowResized() {
    var reCanvas = resizeCanvas(windowWidth, windowHeight);
      reCanvas.parent('p5-canvas');
      background('black');
  }

let colorList = []; 



function draw() {   
    stroke("random")
    let a = mouseX
    let b = mouseY
    theta = radians(a);
    thetb = radians(b);
    translate(a,b);
    if (mouseIsPressed === true) {
        branch(100);
      }
}


function branch(h) {
    // 각각의 나뭇가지 크기는 이전 가지의 2/3에 해당합니다.
    h *= 0.66;
  
    // 모든 재귀 함수에는 종료(exit) 조건이 있어야합니다!!!
    // 이 예제의 경우, 나뭇 가지의 길이가 2픽셀과 같거나 적을 때 입니다.
    if (h > 2) {
      push();    // 현재의 변형 상태를 저장 (즉, 현재 상태)
      rotate(theta);   // theta(세타)값으로 회전하기
      circle(theta, thetb, h);
      circle(thetb-h*2, theta+h*2, h*0.33);
      //translate(0, -h); // 나뭇가지의 끝 지점으로 이동하기
      branch(h);       // 자, 이제 자기 자신을 호출하여 2개의 새로운 나뭇가지를 그릴게요!
      pop();     // 이 지점에 도달할 때 마다, 이전 매트릭스 상태를 복원하기 위해 "pop(팝)"합니다.
  
      // 같은 내용을 반복하되, 이번에는 "왼쪽"으로만 가지가 분기하도록 만듭니다!
      push();
      rotate(-thetb);
      circle(theta-h, thetb+h, h);
      circle(thetb-h*2, theta+h*2, h*0.66);
      //translate(0, -h);
      branch(h);
      pop();
    }
  }
 