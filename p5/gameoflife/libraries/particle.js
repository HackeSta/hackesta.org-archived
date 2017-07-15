function Particle(x,y,r){
  this.x = x;
  this.y = y;
  this.r = r;
}

Particle.prototype.draw = function() {
  stroke(3);
  if(!this.dead)
  {
    fill(0,255,0);
    ellipse(this.x, this.y, this.r);

  }
  
};
Particle.prototype.process = function(){
  var livingNeighbours = this.countNeighbours();
    if(!this.dead){
    if(!(livingNeighbours === 2 || livingNeighbours === 3)){
      this.dead = true;
    }
    if(livingNeighbours < 2) console.log("lonely");
    if(livingNeighbours > 3) console.log("overcrowd");
  }
  
};
Particle.prototype.countNeighbours = function(){
  neighbours = 0;
  for (var i = 0; i < numParticles; i++) {
   neighbour = arrParticles[i];
   if(this.isNeighbourOf(neighbour)){
     neighbours += 1;
   }
   return neighbours;
}
};
Particle.prototype.isNeighbourOf = function(neighbour){
    if(
      dist(this.x,this.y, neighbour.x, neighbour.y) <= neighbourDistance &&
      !neighbour.dead){
      return true;
    }
    return false;
};

Particle.prototype.mousePressed = function(){
  if (mouseX > this.x && mouseX < this.x + sizeParticle && mouseY > this.y && mouseY < this.y + sizeParticle){
    return true;
  }
  return false;
};
Particle.prototype.switchState = function(){
  if (this.dead){
    this.dead = false;
  }
  else this.dead = true;
};
