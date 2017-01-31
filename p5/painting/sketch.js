var vScale = 16;
var particles =[];
var video;
var slider;
var noParticles = 50;
function setup()
{
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(window.width/vScale, window.height/vScale);
  for(var i = 0; i < noParticles; i++)
  {
    particles[i] = new Particle(320,240);
  }
  slider = createSlider(0,255, 127);
  background(255);
}

function draw()
{
  video.loadPixels();
for(var i = 0; i<noParticles; i++ )
  {particles[i].update();
  particles[i].show();
}
}
