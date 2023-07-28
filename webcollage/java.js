//[화면크기와 이미지크기, 배치]
//초기 화면 크기 저장 
  const WindowWidth = window.innerWidth;
  const WindowHeight = window.innerHeight;

  // 현재 윈도우 크기저장
function saveWindowSize() {
    // 현재 윈도우 크기
    const currentWindowWidth = window.innerWidth;
    const currentWindowHeight = window.innerHeight;
  
    // 초기 윈도우 크기와 비교하여 값이 변하지 않을 경우에만 저장
  if (currentWindowWidth !== WindowWidth || currentWindowHeight !== WindowHeight) {
      WindowWidth = currentWindowWidth;
      WindowHeight = currentWindowHeight;
    }
//화면 크기 저장 삭제
  window.removeEventListener('load', saveWindowSize);
}
document.addEventListener('DOMContentLoaded', saveWindowSize);

 console.log("첫 오픈 화면의 크기:");
 console.log("너비:", WindowWidth);
 console.log("높이:", WindowHeight);

//화면 크기를 이용한 개체 사이즈 조절10%
  function setImageSize10() {
    const windowWidth = WindowWidth;
    const ImgSize10 = document.querySelector('.ImgSize10');
    const imageWidth10 = Math.min(windowWidth * 0.1, 1000); // 윈도우 너비의 10% 또는 최대 너비 값

    // 이미지의 너비 설정
    ImgSize10.style.width = imageWidth10 + 'px';
  }
    window.addEventListener('load', setImageSize10);
    window.addEventListener('resize', setImageSize10);

//15%
function setImageSize15() {
  const windowWidth = WindowWidth;
  const ImgSize15 = document.querySelector('.ImgSize15');
  const imageWidth15 = Math.min(windowWidth * 0.15, 1000); // 윈도우 너비의 10% 또는 최대 너비 값

  // 이미지의 너비 설정
  ImgSize15.style.width = imageWidth15 + 'px';
}
  window.addEventListener('load', setImageSize15);
  window.addEventListener('resize', setImageSize15);

//20%
  function setImageSize20() {
    const windowWidth = WindowWidth;
    const ImgSize20 = document.querySelector('.ImgSize20');
    const imageWidth20 = Math.min(windowWidth * 0.2, 1000);// 윈도우 너비의 10% 또는 최대 너비 값

    // 이미지의 너비 설정
    ImgSize20.style.width = imageWidth20 + 'px';
  }
    window.addEventListener('load', setImageSize20);
    window.addEventListener('resize', setImageSize20);

//30%
  function setImageSize30() {
    const windowWidth = WindowWidth;
    const ImgSize30 = document.querySelector('.ImgSize30');
    const imageWidth30 = Math.min(windowWidth * 0.3, 1000); // 윈도우 너비의 10% 또는 최대 너비 값

    // 이미지의 너비 설정
    ImgSize30.style.width = imageWidth30 + 'px';
  }
    window.addEventListener('load', setImageSize30);
    window.addEventListener('resize', setImageSize30);

//이미지가 배치된 곳의 x좌표 위치 리스트
  var imagePositionsX = [0,WindowWidth];
  function saveImagePositionX(event) {
    var x = event.clientX;
    imagePositionsX.push(x);

    //numberList.sort(function(a, b) {
     // return a - b;})
  }
  document.addEventListener('click', saveImagePositionX);

//이미지가 배치된 곳의 y좌표 위치 리스트
  var imagePositionsY = [0,WindowHeight];
  function saveImagePositionY(event) {
    var y = event.clientY;
    imagePositionsY.push(y);
  
    //numberList.sort(function(a, b) {
      //return a - b;})
  }
  document.addEventListener('click', saveImagePositionY);

//x리스트의 연속된 값 중에서 가장 편차가 큰 두 값의 평균 함수
function calculateMaxDeviationAverageX(imagePositionsX) {
  var maxDeviation = 0;
  var startIndex = 0;
  var endIndex = 0;

  // 연속된 값 중에서 가장 편차가 큰 두 값 찾기
  for (var i = 1; i < imagePositionsX.length; i++) {
    var currentDeviation = Math.abs(imagePositionsX[i] - imagePositionsX[i - 1]);
    if (currentDeviation > maxDeviation) {
      maxDeviation = currentDeviation;
      startIndex = i - 1;
      endIndex = i;
    }
  }

  // 평균 계산
  var averageX = (imagePositionsX[startIndex] + imagePositionsX[endIndex]) / 2;
  return averageX;
}
document.addEventListener('click', calculateMaxDeviationAverageX);
//y리스트의 연속된 값 중에서 가장 편차가 큰 두 값의 평균 함수
function calculateMaxDeviationAverageY(imagePositionsY) {
  var maxDeviation = 0;
  var startIndex = 0;
  var endIndex = 0;

  // 연속된 값 중에서 가장 편차가 큰 두 값 찾기
  for (var i = 1; i < imagePositionsY.length; i++) {
    var currentDeviation = Math.abs(imagePositionsY[i] - imagePositionsY[i - 1]);
    if (currentDeviation > maxDeviation) {
      maxDeviation = currentDeviation;
      startIndex = i - 1;
      endIndex = i;
    }
  }

  // 평균 계산
  var averageY = (imagePositionsY[startIndex] + imagePositionsY[endIndex]) / 2;
  return averageY;
}

document.addEventListener('click', calculateMaxDeviationAverageY);

//마우스 xy좌표 위치
var mousePosition = { x: 0, y: 0 };
document.addEventListener('mousemove', function(event) {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
});

//[시간별 애니메이션 작동]
//=채선=

//빈 화면 클릭 시 음악 시작 및 타이틀 및 배경 구름 등장
//음악 재생
function playMusic() {
  var audioElement = document.getElementById('music');
  audioElement.play();
  document.removeEventListener('click', playMusic);
}

document.addEventListener('click', playMusic, { once: true });

// 지속 시간 초기화 함수
var duration = 0;
function resetDuration() {
    duration = 0;
    document.removeEventListener('click', resetDuration);
}

// 1초마다 duration 변수를 1씩 증가시키는 함수
function increaseDuration() {
  duration++;
  console.log("Duration:", duration);
}

// 1초마다 increaseDuration 함수를 호출
setInterval(increaseDuration, 1000);
document.addEventListener('click', setInterval);

//타이틀 구름 이미지 로드
  function getImageSrcTitleCloud() {
    var imageSrc = './img/01_chae/cloud.svg' ;
    return imageSrc;
    }

//타이틀 구름 이미지 추가
  function showImageTitleCloud() {
    var imageElement = document.createElement('img');
    imageElement.src = getImageSrcTitleCloud();
    imageElement.classList.add('TitleCloud');
    imageElement.classList.add('TitleCloudAni');
    imageElement.classList.add('ImgSize15');
    imageElement.classList.add('show');
    document.body.appendChild(imageElement);
    
    document.removeEventListener('click', showImageTitleCloud);
    imageElement.addEventListener('click', TitleCloudClickedPosition), { once: true };

    // 이미지 로드 후에 애니메이션 정지 클릭 리스너 추가 및 클릭 횟수 초기화 리스너 추가
    imageElement.addEventListener('load', function() {
      imageElement.addEventListener('click', stopAnimation);
    });

    //지속시간 초기화
    document.addEventListener('click', resetDuration);
  }
  document.addEventListener('click', showImageTitleCloud);
  

var clickCount = 100;
console.log("클릭 횟수:" + clickCount);

  // 애니메이션을 정지시키는 작업 수행
  function stopAnimation(event) {
    event.target.style.animationPlayState = 'paused';
    clickCount = -2; 
    console.log("Click:" + clickCount)
    document.addEventListener('click', CickCount);
    document.removeEventListener('click', stopAnimation);
  }

//클릭 횟수 카운트
function CickCount() {
  document.addEventListener('click', showImageBgCloud);
clickCount++; 
  console.log("Click:" + clickCount)
}

//배경 구름 등장 함수
function getImageSrcBgCloud() {
  var imageSrc = './img/01_chae/cloud02.svg' ;
  return imageSrc;
  console.log("Click:" + clickCount);
  }

function showImageBgCloud() {
  var imageElement = document.createElement('img');
  imageElement.src = getImageSrcBgCloud();
  imageElement.classList.add('BgCloud');
  imageElement.classList.add('BgCloudAni');
  imageElement.classList.add('ImgSize10');
  imageElement.classList.add('show');
  document.body.appendChild(imageElement);
}

document.addEventListener('click', showImageBgCloud);

//타이틀구름 클릭 시 이미지 전개

//이미지 위치 계산
function TitleCloudClickedPosition(event) {
  
  var clickX = event.clientX;
  var clickY = event.clientY;

  var image01 = document.querySelector('.ChaImg01');
  image01.style.left = clickX + 'px';
  image01.style.top = clickY + 50 + 'px';

  var text01= document.querySelector('.ChaTxt01');
  text01.style.left = clickX +10 + 'px';
  text01.style.top = (clickY + 30) + 'px';

  var image02 = document.querySelector('.ChaImg02');
  image02.style.left = clickX-300 + 'px';
  image02.style.top = clickY + 150 + 'px';

  var text02 = document.querySelector('.ChaTxt02');
  text02.style.left = clickX -300 + 'px';
  text02.style.top = clickY + 180 + 'px';

  var image03 = document.querySelector('.ChaImg03');
  image03.style.left = clickY + 'px';
  image03.style.top = clickX + 200 + 'px';

  var text03 = document.querySelector('.ChaTxt03');
  text03.style.left = clickY + 'px';
  text03.style.top = clickX + 190 + 'px';





  document.addEventListener('click', showChaImg01);

  console.log("Clicked positions:" + clickX, clickY);
  document.removeEventListener('click', TitleCloudClickedPosition);

  //document.body.appendChild(imageElement);

  //var imageSrc = getChaImgSrc();
  //imageElement.src = imageSrc;
}

function showChaImg01() {
  var imageElement = document.querySelector('.ChaImg01');
  imageElement.style.display = 'block';
  imageElement.classList.add('ImgSize20');
  document.addEventListener('click', showChaTxt01);
}

function showChaTxt01() {
  var imageElement = document.querySelector('.ChaTxt01');
  imageElement.style.display = 'block';
  imageElement.classList.add('ImgSize20');
  document.addEventListener('click', showChaImg02);
}

function showChaImg02() {
  var imageElement = document.querySelector('.ChaImg02');
  imageElement.style.display = 'block';
  imageElement.classList.add('ImgSize20');
  document.addEventListener('click', showChaTxt02);
}

function showChaTxt02() {
  var imageElement = document.querySelector('.ChaTxt02');
  imageElement.style.display = 'block';
  imageElement.classList.add('ImgSize20');
  document.addEventListener('click', showChaImg03);
}

function showChaImg03() {
  var imageElement = document.querySelector('.ChaImg03');
  imageElement.style.display = 'block';
  imageElement.classList.add('ImgSize20');
  document.addEventListener('click', showChaTxt03);
}

function showChaTxt03() {
  var imageElement = document.querySelector('.ChaTxt03');
  imageElement.classList.add('ImgSize20');
  imageElement.style.display = 'block';
  setTimeout(showImageWithDelaySH, 2500); 
  document.removeEventListener('click', showChaTxt03);
}

//이미지3 애니메이션(css)


//=성훈=
function getImageSrcTitleSH() {
  var imageSrc = './img/03_sh/text01.png' ;
  return imageSrc;
  }

  //타이틀 이미지 생성
function showImageWithDelaySH() {
  // 이미지 생성 및 위치 설정
  var imageElement = document.createElement('img');
  var averageX = calculateMaxDeviationAverageX(imagePositionsX);
  var averageY = calculateMaxDeviationAverageY(imagePositionsY);
  imageElement.src = getImageSrcTitleSH();
  imageElement.classList.add('ImgSize30');
  imageElement.classList.add('SHTitle');
  //imageElement.classList.add('SHTitleAni');
  imageElement.style.position = 'absolute';
  imageElement.style.left = averageX + 'px';
  imageElement.style.top = averageY + 'px';
  document.body.appendChild(imageElement);
  console.log('clcik');
  document.removeEventListener('click', showImageWithDelaySH);
  imageElement.addEventListener('click', ClickSHTitle);
}

//성훈 타이틀 클릭 시 애니메이션 중지
function ClickSHTitle() {
  console.log('clcik-');
  var imageElement = document.querySelector('.SHTitle');
  
  // CSS 클래스 제거
  //imageElement.classList.remove('SHTitleAni');
  //imageElement.classList.add('SHTitleAniPaused');

  document.addEventListener('click', SH);
  document.addEventListener('click', resetDurationSH);
}

var durationSH = 0;
// 지속 시간 초기화 함수
function resetDurationSH() {
    durationSH = 0;
    document.removeEventListener('click', resetDurationSH);
}

// 1초마다 duration 변수를 1씩 증가시키는 함수
function increaseDurationSH() {
  durationSH++;
  console.log("DurationSH:", durationSH);
}

// 1초마다 increaseDuration 함수를 호출
setInterval(increaseDurationSH, 1000);
document.addEventListener('click', setInterval);

//소스이미지변경
function getImageSrcSH(second) {
  var imageSrc = '';
    if (second < 1) {
      imageSrc = './img/03_sh/img01.png';
    } else if (second < 3 ) {
      imageSrc = './img/03_sh/img03.png';
    } else if (second < 5 ) {
      imageSrc = './img/03_sh/img04.png';
    } else if (second < 7 ) {
      imageSrc = './img/03_sh/img02.png';
    } else if (second < 11 ) {
      imageSrc = './img/03_sh/text01.png';
    } else if (second < 15 ) {
      imageSrc = './img/03_sh/text02.png';
    } else if (second < 18 ) {
      imageSrc = './img/03_sh/text03.png';
    }
  return imageSrc;
}

//이미지 전개
function showImageSH(durationSH) {
  setTimeout(function() {
    var imageElement = document.createElement('img');
    imageElement.src = getImageSrcSH(durationSH);
    imageElement.classList.add('ImgSize20');
    imageElement.classList.add('show');
    document.body.appendChild(imageElement);
  }, 
  durationSH * 1000);

}

function Set_ShowImageSH(){
showImageSH(1, 'SHImg01-1');
showImageSH(2, 'SHImg03-1');
showImageSH(3, 'SHImg04-1');
showImageSH(4, 'SHImg02-1');
showImageSH(5, 'SHTxt01-1');
showImageSH(6, 'SHTxt02-1');
showImageSH(7, 'SHTxt03-1');
showImageSH(1, 'SHImg01-2');
showImageSH(2, 'SHImg03-2');
showImageSH(4, 'SHImg02-2');
showImageSH(3, 'SHImg04-2');
showImageSH(5, 'SHTxt01-2');
showImageSH(6, 'SHTxt02-2');
showImageSH(7, 'SHTxt03-2');
showImageSH(1, 'SHImg01-3');
showImageSH(2, 'SHImg03-3');
showImageSH(4, 'SHImg02-3');
showImageSH(3, 'SHImg04-3');
showImageSH(5, 'SHTxt01-3');
showImageSH(6, 'SHTxt02-3');
showImageSH(7, 'SHTxt03-3');
showImageSH(1, 'SHImg01-4');
showImageSH(2, 'SHImg03-4');
showImageSH(4, 'SHImg02-4');
showImageSH(3, 'SHImg04-4');
showImageSH(5, 'SHTxt01-4');
showImageSH(6, 'SHTxt02-4');
showImageSH(7, 'SHTxt03-4');
}

function SH(){
Set_ShowImageSH();
Set_ShowImageSH();
}



//타이틀 클릭 위치 바로 아래에서 처음 이미지 전개
//타이틀 클릭 위치 함수에서 계산하여 위치 이동(화면 밖을 벗어나지 않도록)
  //이미지 전개
  //배경 이미지 등장
  //집 등장
  //풀 등장
  //오렌지 등장
  //타이틀 등장
  //어디~~ 등장
  //레몬과~~등장

//=환준=
//음악 재생 이후 일정 시간 이후 다음 함수 3번 반복
  //오렌지 1개 등장 및 깜빡거림
  //클릭 시 사라짐
//환준 타이틀 한 글자씩 등장
//오렌지와 빈 잼병 등장
//오렌지를 잼병에 드래그
//잼병 채우진 이미지 등장
//잼병 드래그 시 잼병 깨지고 글자.. 모르겠음

