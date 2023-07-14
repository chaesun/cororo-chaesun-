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

      const imageWidth20 = windowWidth * 0.2// 윈도우 너비의 10% 또는 최대 너비 값

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
      //return a - b;})
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
var clickCount = 100;
console.log("클릭 횟수:", clickCount);

var duration = 0;
// 지속 시간 초기화 함수
function resetDuration() {
  if (!document.mouseClicked) {
    duration = 0;
  } else {setInterval(function() {
    duration++;
  }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', resetDuration);


// 매 초마다 지속 시간 증가


var initialClickPosition = null;
//타이틀 구름 등장 함수
  function getImageSrcTitleCloud() {
    var imageSrc = './img/01_chae/cloud.svg' ;
    return imageSrc;
    }

  function showImageTitleCloud() {
    var imageElement = document.createElement('img');
    imageElement.src = getImageSrcTitleCloud();
    imageElement.classList.add('TitleCloud');
    imageElement.classList.add('TitleCloudAni');
    imageElement.classList.add('ImgSize15');
    imageElement.classList.add('show');
    document.body.appendChild(imageElement);


    document.removeEventListener('click', showImageTitleCloud);
    
    // 이미지 로드 후에 애니메이션 정지 클릭 리스너 추가
    imageElement.addEventListener('load', function() {
      imageElement.addEventListener('click', stopAnimation);
    });

    // 이미지 로드 후 클릭 횟수 초기화 리스너 추가
    imageElement.addEventListener('load', function() {
      imageElement.addEventListener('click', resetClickCount, { once: true });
    });

    //지속시간 초기화
    document.addEventListener('click', resetDuration);
  }
  
  // 애니메이션을 정지시키는 작업 수행
  function stopAnimation(event) {
    event.target.style.animationPlayState = 'paused';
  }

  //클릭 횟수 초기화
  function resetClickCount() {
    clickCount = 0; 
  }
  
document.addEventListener('click', showImageTitleCloud);
document.addEventListener('click', setInterval);

console.log(initialClickPosition);


//배경 구름 등장 함수
function getImageSrcBgCloud() {
  var imageSrc = './img/01_chae/cloud02.svg' ;
  return imageSrc;
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

//음악 재생
function playMusic() {
  var audioElement = document.getElementById('music');
  audioElement.play();

  document.removeEventListener('click', playMusic);
}

document.addEventListener('click', playMusic, { once: true });

//타이틀구름 클릭 시 이미지 전개
console.log("클릭 횟수:", clickCount);

//소스이미지변경
function getChaImgSrc() {
  var imageSrc = '';
    if (clickCount === 1) {
      imageSrc = './img/01_chae/img01.png';
    } else if (clickCount === 2) {
      imageSrc = './img/01_chae/text01.svg';
    } else if (clickCount === 3) {
      imageSrc = './img/01_chae/img02.png';
    } else if (clickCount === 4) {
      imageSrc = './img/01_chae/text02.svg';
    } else if (clickCount === 5) {
      imageSrc = './img/01_chae/img03.png';
    } else if (clickCount === 6) {
      imageSrc = './img/01_chae/text03.svg';
    }
  return imageSrc;
}

//css변경
function applyCustomStyles(imageElement) {
  if (clickCount === 1) {
    imageElement.classList.add('ChaImg01');
    imageElement.classList.add('ImgSize20');
  } else if (clickCount === 2) {
    imageElement.classList.add('ChaTxt01');
    imageElement.classList.add('ImgSize20');
  } else if (clickCount === 3) {
    imageElement.classList.add('ChaImg02');
    imageElement.classList.add('ImgSize20');
  } else if (clickCount === 4) {
    imageElement.classList.add('ChaTxt02');
    imageElement.classList.add('ImgSize20');
  } else if (clickCount === 5) {
    imageElement.classList.add('ChaImg03');
    imageElement.classList.add('ImgSize20');
    var bodyElement = document.body;
    bodyElement.style.background = '';
    bodyElement.style.background = ('#4792FF');
    //'linear-gradient(180deg, orange 50%, #4792FF 100%)'
  } else if (clickCount === 6) {
    imageElement.classList.add('ChaTxt03');
    imageElement.classList.add('ImgSize20');
  }

}

//첫 이미지 위치 계산
function calculateImagePosition() {
  if (initialClickPosition) {
    var imageElement = document.createElement('img');
    imageElement.classList.add('ChaImg01');
    
    var titleCloudElement = document.querySelector('.TitleCloud');
      var titleCloudRect = titleCloudElement.getBoundingClientRect();
      var imageWidth = imageElement.offsetWidth;
      var imageHeight = imageElement.offsetHeight;

      var x = initialClickPosition.x - (imageWidth / 2);
      var y = initialClickPosition.y ;
      
      imageElement.style.left = x + 'px';
      imageElement.style.top = y + 50 + 'px';
      imageElement.style.display = 'block';
      
      document.body.appendChild(imageElement);

      var imageSrc = getChaImgSrc();
      imageElement.src = imageSrc;
  }
}

//이후 이미지 위치 계산

//텍스트 위치 계산

//추가 클릭 시 이미지 등장
function showChaImg() {
  var imageElement = document.createElement('img');
  imageElement.src = getChaImgSrc();
  applyCustomStyles(imageElement); 
  document.body.appendChild(imageElement);
  clickCount++; 
  calculateImagePosition();
}

document.addEventListener('click', showChaImg);

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

  SH();
}
setTimeout(showImageWithDelaySH, 5000); //시간 정하기

//성훈 타이틀 클릭 시 애니메이션 중지
function imageClickHandlerSH() {
  var imageElement = document.querySelector('.SHTitle');
  
  // CSS 클래스 제거
  imageElement.classList.remove('SHTitleAni');
  imageElement.classList.add('SHTitleAniPaused');
}
// 이미지 클릭 이벤트 등록
//imageElement.addEventListener('click', imageClickHandlerSH);


//소스이미지변경
function getImageSrcSH(second) {
  var imageSrc = '';
    if (second < 1) {
      imageSrc = './img/03_sh/img01.png';
    } else if (second < 2 ) {
      imageSrc = './img/03_sh/img03.png';
    } else if (second < 3 ) {
      imageSrc = './img/03_sh/img04.png';
    } else if (second < 4 ) {
      imageSrc = './img/03_sh/img02.png';
    } else if (second < 5 ) {
      imageSrc = './img/03_sh/text01.png';
    } else if (second < 6 ) {
      imageSrc = './img/03_sh/text02.png';
    } else if (second < 7 ) {
      imageSrc = './img/03_sh/text03.png';
    }
  return imageSrc;
}

//이미지 전개
function showImageSH(delayInSeconds) {
  setTimeout(function() {
    var imageElement = document.createElement('img');
    imageElement.src = getImageSrcSH(delayInSeconds);
    imageElement.classList.add('ImgSize20');
    imageElement.classList.add('show');
    document.body.appendChild(imageElement);
  }, delayInSeconds * 1000);

  
}

function Set_ShowImageSH(){
showImageSH(1, 'SHImg01');
showImageSH(2, 'SHImg03');
showImageSH(3, 'SHImg04');
showImageSH(4, 'SHImg02');
showImageSH(5, 'SHTxt01');
showImageSH(6, 'SHTxt01');
showImageSH(7, 'SHTxt01');
}

function SH(){
Set_ShowImageSH();
Set_ShowImageSH();
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

//=수연=
//음악 재생 이후 일정 시간 이후 마우스에 오렌지이미지 등장
function getImageSrcSY (){
  var imageSrc = './img/02_sy/orangejuice.jpg' ;
  return imageSrc;
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(showOrangeJuice, 2000);
});

//마우스위치에 따른 오렌지 이미지 위치 반응
function showOrangeJuice() {
  var orangeJuice = document.querySelector('.juice');
  orangeJuice.style.display = 'block';

  document.addEventListener('mousemove', moveOrangeJuice);
  document.addEventListener('click', fixOrangeJuice);
  showOrangeJuiceRe()
}

function moveOrangeJuice(event) {
  var orangeJuice = document.querySelector('.juice');
  var container = document.querySelector('.container');

  var offsetX = event.clientX - container.offsetLeft;
  var offsetY = event.clientY - container.offsetTop;

  orangeJuice.style.left = offsetX + 'px';
  orangeJuice.style.top = offsetY + 'px';
}

//반대로 따라다니는 이미지(위치 계산)
function showOrangeJuiceRe() {
  var orangeJuice = document.querySelector('.Reversejuice');
  orangeJuice.style.display = 'block';

  document.addEventListener('mousemove', moveOrangeJuiceRe);
  document.addEventListener('click', fixOrangeJuiceRe);
}

function moveOrangeJuiceRe(event) {
  var imageElement = document.querySelector('.Reversejuice');
  var containerElement = document.querySelector('.container');

  // 마우스의 현재 위치
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // 컨테이너 요소의 가로, 세로 중앙 위치
  var containerCenterX = containerElement.offsetWidth / 2;
  var containerCenterY = containerElement.offsetHeight / 2;

  // 이미지 위치 계산
  var ReverseX = containerCenterX - (mouseX - containerCenterX);
  var ReverseY = containerCenterY - (mouseY - containerCenterY);

  // 이미지 위치 설정
  imageElement.style.left =  ReverseX + 'px';
  imageElement.style.top = ReverseY + 'px';
}


//클릭 시 오렌지 이미지 드롭
function fixOrangeJuice(event) {
  var imageElement = document.createElement('img');
  var offsetX = event.clientX;
  var offsetY = event.clientY;
  imageElement.src = getImageSrcSY();
  imageElement.classList.add('ImgSize10');
  imageElement.style.position = 'fixed';
  imageElement.style.left = offsetX + 'px';
  imageElement.style.top = offsetY + 'px';
  document.body.appendChild(imageElement);

}

function fixOrangeJuiceRe(event) {
  var imageElement = document.createElement('img');
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var ReverseX = WindowHeight - (mouseX);
  var ReverseY = WindowWidth - (mouseY);
  imageElement.src = getImageSrcSY();
  imageElement.classList.add('ImgSize10');
  imageElement.style.position = 'fixed';  
  imageElement.style.left =  ReverseX + 'px';
  imageElement.style.top = ReverseY + 'px';
  document.body.appendChild(imageElement);

}

//음악 재생 이후 일정 시간 이후 마우스가 움직이는 동선을 따라 오렌지 방울 드롭
var imageElement = document.querySelector('.OrangeDrop');
var containerElement = document.querySelector('.containerDrop');

// 마우스 이동 이벤트 리스너 등록
function fixOrangeDrop(event){
document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // 컨테이너의 위치 및 크기 정보
  var containerRect = containerElement.getBoundingClientRect();

  // 이미지 위치 설정
  imageElement.style.left = mouseX - containerRect.left + 'px';
  imageElement.style.top = mouseY - containerRect.top + 'px';
});
}

//이미지 호버 시 오렌지 방울 모션

//음악 재생 이후 일정 시간 이후 클릭 시 랜덤 위치에 바 드롭
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(ShowSYBar, 2000);
});

function getImageSrcSYBar(){
  var imageSrc = './img/02_sy/02_suyeon_work.svg' ;
  return imageSrc;
}

function getRandomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Set_ShowSYBar() {
  ShowSYBar();
  ShowSYBar();
  ShowSYBar();
  ShowSYBar();
  ShowSYBar();}

function ShowSYBar() {
  var imageElement = document.createElement('img');
  var RandomX = getRandomPosition(0, WindowWidth-imageElement.offsetWidth);
  var RandomY = getRandomPosition(0, WindowHeight- imageElement.offsetHeight);
  imageElement.src = getImageSrcSYBar();
  imageElement.classList.add('ImgSize0');
  document.body.appendChild(imageElement);
  // 이미지 위치 설정
  imageElement.style.left = RandomX + 'px';
  imageElement.style.top = RandomY  + 'px';

  // 이미지 보이기
  imageElement.style.display = 'block';
}

//=민제=
//일정 시간 이후 민제 이미지 등장
//야바위 컵 등장
//야바위 컵 클릭 시 레몬 혹은 오렌지, 강낭콩 등장
//오렌지 클릭 시 지원 오렌지 이미지 등장

//=지원=
//이미지 드래그 가능 함수 모두 적용
//앞선 x평균 함수에서 지원 타이틀 x위치 지정
//앞선 y평균 함수에서 지원 타이틀 y위치 지정
//음악 재생 이후 일정 시간 이후 지원 타이틀1 등장
//타이틀2 등장
//텍스트1 타이핑 등장
//이미지1 등장
//텍스트2 타이핑 등장
//이미지2 등장
//텍스트3 타이핑 등장


//=지원 종료 이후=
//마우스를 따라 움직이며 오렌지 껍질 덧입히기.













