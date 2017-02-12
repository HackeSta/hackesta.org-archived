var attractors =[];
var number = 200;
var particles = [];
function setup()
{
createCanvas(400,400);
  //attractor = createVector(window.width/2, window.height/2);
  for(var i = 0; i < number; i++)
  {
    particles[i] = new Particle(random(window.width), random(window.height));
  }
  background(51);


}

function draw()
{

   for(var i = 0; i < number/2; i++){
    attractors.push(createVector(random(window.width), random(window.height)));
   }
  for(var i = 0; i < number; i++)
  {

        for(j=0; j < attractors.length; j++)
    {
    particles[i].attract(attractors[j]);
    }
    particles[i].update();
    particles[i].draw();

  }
  for(var i =0; i < attractors.length; i++)
  {
    noStroke();
  //stroke(0,255,0);
  strokeWeight(10);
  point(attractors[i].x, attractors[i].y);
  }
}


function mousePressed(){
//  attractors.push(createVector(mouseX,mouseY))
}
