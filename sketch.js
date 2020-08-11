var particles = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;3

function setup() {
  createCanvas(480,800);

  ground = new Ground(20,770,940,20);

  for (var k = 0; k <= width; k = k + 80) {
    
    if (frameCount % 60 === 0) {
    
      divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));
    }
  }

  for (var j = 40; j <= width; j = j + 50) {

    plinkos.push(new plinko(j, 75))
  } 

  for (var j = 50; j <= width-10; j = j + 50) {

    plinkos.push(new plinko(j, 175))
  }

  for (var j = 0; j < particles.length; j++ ) {

    particles[j].display();
  } 

  for (var k = 0; k < divisions.lenght; k++ ) {

    divisions[k].display();
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}