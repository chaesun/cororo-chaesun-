function goToNextPage() {

    var nextPageURL = '../p6/index.html'; // 여기에 다음 페이지의 URL을 입력하세요
  
    // 새로운 페이지로 이동
    window.location.href = nextPageURL;
  }
  
  // body 요소에 클릭 이벤트 리스너 등록
  document.addEventListener('click', goToNextPage);

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
    //background('black');
    //image(img01, 0, 0, windowWidth/2, windowHeight/2);
    //image(img02, windowWidth/2, 0, windowWidth/2, windowHeight/2);
    //image(img03, 0, windowHeight/2, windowWidth/2, windowHeight/2);
    //image(img04, windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2);
    

}

function windowResized() {
    var reCanvas = resizeCanvas(windowWidth, windowHeight);
      reCanvas.parent('p5-canvas');
      background('black');
  }

function draw() {    
    erase()
    line(10, 50, mouseX, 1000);
    noErase()    
}

//setup
for(i=0; i<150; i++){
    heartArr.push(new Heart());
}

//draw
heartArr.forEach(function(r){
    r.createHeart();
    r.move();   
});    


class Heart{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.mx = random(0, width);
        this.my = random(0, height);
        this.speedRange = [-2,-1,1,2];
        this.xSpeed = random(this.speedRange);
        this.ySpeed = random(this.speedRange);
        this.size = random(55);
        this.degree = random(10);

        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
    }

    createHeart(){
        push();
        translate(this.mx, this.my);
        rotate(PI * this.degree);

        noStroke();
        noSmooth();
        fill(this.red, this.green, this.blue);
        beginShape();
        vertex(this.x, this.y);
        bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
        bezierVertex(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);            
        endShape(CLOSE);
        pop();
    }

    move(){
        if(this.mx < 0 || this.mx > width){
            this.xSpeed *= -1;
        }
        if(this.my < 0 || this.my > height){
            this.ySpeed *= -1; 
        }

        this.mx += this.xSpeed;
        this.my += this.ySpeed;
        this.degree = this.degree + 0.01;
    }       
}

let heartArr = [];
