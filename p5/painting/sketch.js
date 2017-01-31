var vScale = 8;
var Z =[];
var video;
var slider;
var noParticles = 500;
function setup()
{
  createCanvas(640, 500);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(window.width/vScale, window.height/vScale);
  for(var i = 0; i < noParticles; i++)
  {
    Z[i] = new particle(random(window.width),random(window.height),0,0,1);
  }
  slider = createSlider(0,255, 127);
  background(255);
}

function draw()
{
  video.loadPixels();
  var r;

  for(var i = 0; i < Z.length; i++) {
    Z[i].gravitate( new particle(floor(random(0,window.width)), floor(random(0,window.height)), 0, 0, 1 ) );
    Z[i].update();
    r = i/Z.length;
    px = floor(Z[i].x / vScale);
    py = floor(Z[i].y / vScale);
    colour = video.get(px,py);
    Z[i].display(colour);
  }

}
