
var Z =[];
var noParticles = 2;
function setup()
{
  createCanvas(640, 500);
  pixelDensity(1);
  for(var i = 0; i < noParticles; i++)
  {
    Z[i] = new particle(random(window.width),random(window.height),0,0,1);
  }
  background(255);
}

function draw()
{

  for(var i = 0; i < Z.length; i++) {
    Z[i].gravitate( new particle(floor(random(0,window.width)), floor(random(0,window.height)), 0, 0, 1 ) );
    Z[i].update();
    Z[i].display();
  }

}
