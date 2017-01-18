var circle;
function setup()
{
  createCanvas(800,500);
  circle = new Circle();
}

function draw()
{
  background(100);
  circle.show();
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
    this.circle.up();
  }
  if(keyCode == DOWN_ARROW)
  {
    this.circle.down();
  }if(keyCode == LEFT_ARROW)
  {
    this.circle.left();
  }if(keyCode == RIGHT_ARROW)
  {
    this.circle.right();
  }
}

function touchStarted()
{
  circle.touch(mouseX,mouseY);
}
function touchMoved()
{
  circle.touch(mouseX,mouseY);
}
function touchEnded()
{
  circle.touch(mouseX,mouseY);
}

function Circle()
{

  this.x = window.width /2;
  this.y = window.height/2;
  this.inc = 100;
  this.size = 80;
  this.show = function()
  {
    fill(255,0,0);
    ellipse(this.x,this.y,this.size,this.size)
  }

  this.up = function()
  {
    if((this.y - this.size/2)>0 + this.size/2)
    {
      this.y += -1 * this.inc;
    }
  }
  this.down = function()
  {
    if((this.y + this.size/2)< window.height - this.size/2)
    {
    this.y += this.inc;
  }
  }
  this.right = function()
    {
      if((this.x + this.inc)<window.width)      {
      this.x += this.inc;
    }
    }
  this.left = function()
    {
      if((this.x - this.inc)>0)
      {
        this.x += -1 * this.inc;
      }
    }
  this.touch = function(x,y)
  {
    this.x = x;
    this.y = y;
  }
  this.reset = function()
  {
      this.x = window.width /2;
      this.y = window.height/2;
  }
}
