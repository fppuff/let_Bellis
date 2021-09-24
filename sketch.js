let img1
let imgs1= []
let counter1 = 0; 
const numImages1 =70;


let flower;
let angle = 0; 


function preload(){
    img1 = loadImage('map_sprite_70.png')
    flower = loadModel('flower_obj.obj')
    img2 = loadImage('fp-263-7.png')
}

function setup() {
  createCanvas(800, 600, WEBGL);
  stroke(0, 250, 0)
  strokeWeight = 0.5; 

  for(let i = 0; i <70; i++ )
    imgs1[i] = img1.get(i * 200, 0, 200, 150)

 
}

function draw() {
  background(220);

 image (imgs1[counter1 % numImages1], -150, -200, 400, 300)
  counter1 ++;
 
  push()
    scale(130);
    fill(125, 0, 250);
    rotateX(PI);
    rotateY(angle);
    model(flower);
  pop()
 angle += 0.01;

image(img2, -350, 0, 130, 200)

}