function goToNextPage() {

  var nextPageURL = '../p10/index.html'; // 여기에 다음 페이지의 URL을 입력하세요

  // 새로운 페이지로 이동
  window.location.href = nextPageURL;
}

// body 요소에 클릭 이벤트 리스너 등록
document.addEventListener('click', goToNextPage);


function preload(){
}

let pastaCurves = []; // 곡선들을 저장할 리스트 선언

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
  background('black');
  generatePastaCurves(); // 파스타 모양의 곡선들을 생성하는 함수 호출
//파스타면
stroke('white');
strokeWeight(4);
strokeCap(ROUND);
noFill();




    // 생성된 파스타 모양의 곡선들을 화면에 그리기
    for (let i = 0; i < pastaCurves.length; i++) {
      beginShape();
      for (let j = 0; j < pastaCurves[i].length; j++) {
        curveVertex(pastaCurves[i][j].x, pastaCurves[i][j].y);
      }
      endShape();
    }
    mouseMoved();

}


function generatePastaCurves() {
  let numCurves = 10; // 파스타 모양의 곡선 개수
    let numPoints = 20; // 각 곡선의 꼭지점 개수

      for (let i = 0; i < numCurves; i++) {
        let curvePoints = []; // 각 곡선의 꼭지점을 저장할 리스트

        for (let j = 0; j < numPoints; j++) {
          let x = random(width); // 랜덤한 X 좌표
          let y = random(height); // 랜덤한 Y 좌표
          curvePoints.push(createVector(x, y)); // 꼭지점 좌표를 리스트에 추가
        }

        pastaCurves.push(curvePoints); // 생성된 곡선의 꼭지점 리스트를 리스트에 추가
      }
}

function mouseMoved() {
  // 마우스를 클릭했을 때, 가
let closestDist = Infinity;
let closestIndex;
for (let i = 0; i < pastaCurves.length; i++) {
for (let j = 0; j < pastaCurves[i].length; j++) {
  let distToMouse = dist(mouseX, mouseY, pastaCurves[i][j].x, pastaCurves[i][j].y);
  if (distToMouse < closestDist) {
    closestDist = distToMouse;
    closestIndex = j;
  }
}
}

// 가장 가까운 꼭지점을 마우스 위치로 변경
pastaCurves[0][closestIndex].x = mouseX+500;
pastaCurves[0][closestIndex].y = mouseY+500;
}