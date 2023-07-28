function goToNextPage() {

  var nextPageURL = '../p9/index.html'; // 여기에 다음 페이지의 URL을 입력하세요

  // 새로운 페이지로 이동
  window.location.href = nextPageURL;
}

// body 요소에 클릭 이벤트 리스너 등록
document.addEventListener('click', goToNextPage);

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
    branch(90);
    generateColors();
    for (let i = 0; i < colorList.length; i++) {
        fill(colorList[i]); // 리스트에 저장된 색상으로 선 그리기
      }
}


function branch(h) {
    // 각각의 나뭇가지 크기는 이전 가지의 2/3에 해당합니다.
    h *= 0.106;
    let a = mouseX
    let b = mouseY

    // 모든 재귀 함수에는 종료(exit) 조건이 있어야합니다!!!
    // 이 예제의 경우, 나뭇 가지의 길이가 2픽셀과 같거나 적을 때 입니다.
    if (h > 3) {
      push();    // 현재의 변형 상태를 저장 (즉, 현재 상태)
      rotate(theta);   // theta(세타)값으로 회전하기
      //line(0, 0, 0, -h);  // 나뭇가지 그리기
      bezier(a-h, sin(a-b), cos(a), tan(b+h), a+h, sin(b+h),  a-h, tan(a+b+h));
      square(0,0,h,0,0,0,0);
      //circle(thetb-h*2, theta+h*2, h*1.5);
      //translate(0, -h); // 나뭇가지의 끝 지점으로 이동하기
      branch(h);       // 자, 이제 자기 자신을 호출하여 2개의 새로운 나뭇가지를 그릴게요!
      pop();     // 이 지점에 도달할 때 마다, 이전 매트릭스 상태를 복원하기 위해 "pop(팝)"합니다.
  
      // 같은 내용을 반복하되, 이번에는 "왼쪽"으로만 가지가 분기하도록 만듭니다!
      push();
      rotate(-thetb);
      //line(0, 0, 0, -h);
      square(0,0,h*0.66,0,100,0,100);
      //translate(0, -h);
      branch(h);
      pop();
    }
  }

  function generateColors() {
    // 색상 리스트 초기화
    for (let i = 0; i < 10; i++) {
      let r = random(255); // 0부터 255 사이의 랜덤한 값을 R에 할당
      let g = random(255); // 0부터 255 사이의 랜덤한 값을 G에 할당
      let b = random(255); // 0부터 255 사이의 랜덤한 값을 B에 할당
      colorList.push(color(r, g, b)); // R, G, B로 색상을 생성하고 리스트에 추가
    }
}