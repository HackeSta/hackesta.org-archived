function Particle(x,y){
  this.pos = createVector(x,y);
  this.acceleration = createVector();
  this.velocity = p5.Vector.random2D();

  this.draw = function(){

    stroke(random(255),random(255),random(255));
    //stroke(255);
    strokeWeight(5);
    point(this.pos.x,this.pos.y);
  }

  this.update = function(){
    this.pos.x = constrain(this.pos.x, 0,width);
    this.pos.y = constrain(this.pos.y, 0,height);
    this.pos.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }
  this.attract = function(target){
    var force = p5.Vector.sub(target, this.pos);
    if((force.x < 100 && force.x > -100) && (force.y < 100 && force.y > -100))
    {
        force.x = -1*force.x;
        force.y = -1*force.y;
    }
    var dSq  = force.magSq();
    dSq = constrain(dSq, 9999,10000);
    var G = 6.67408;
    var strength  = G / dSq;
  force.setMag(strength);
    this.acceleration.add(force);

  }
}
