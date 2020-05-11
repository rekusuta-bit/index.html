
var num = 20;
var x = new Array(num);
var y = new Array(num);
var mx = new Array(num);
var my = new Array(num);
var s = new Array(num);
var g = new Array(num);
var h = new Array(num);
var j = new Array(num);
var k= new Array(num);


function canvasSetup(){
    background(255);
    for(var i = 0; i < nums; i++){
        particles_a[i] = new Particle(random(0, width),random(0,height));
        particles_b[i] = new Particle(random(0, width),random(0,height));
        particles_c[i] = new Particle(random(0, width),random(0,height));
    }
}

function windowResized(){
    resizeCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight);
    canvasSetup();
}

function setup(){
  createCanvas(windowWidth, 0);
  background(255);
  for(var i=0; i<num; i=i+1){
    x[i]= random(400,800);
    y[i]= random(400,800);
    mx[i] = random(-4,2);
    my[i] = random(-4,2);
    s[i] = random(10,120);
    g[i] = random(0,0);
    h[i] = random(0,255);
    j[i] = random(0,50);
    k[i] = random(0,155);

    canvas = createCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight);
    canvas.position(0,0);//canvasをページの原点に固定
    canvas.style('z-index','-1');//canvasを後ろに移動する。
  }
}

function draw(){
  background(255);
  noStroke();
  frameRate(50)

  for(var i=0; i<num; i=i+1){

    fill(g[i], h[i], j[i], k[i]);
    ellipse(x[i], y[i], s[i], s[i]);

    if(x[i]>windowWidth || x[i]<0){
      mx[i] = mx[i] * -1;
    }
    x[i] = x[i]+mx[i];

    if(y[i]>2000 || y[i]<0){
      my[i] = my[i] * -1;
    }
    y[i] = y[i]+my[i];
  }


}
