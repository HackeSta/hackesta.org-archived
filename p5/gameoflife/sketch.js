function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


var winWidth      = 500, // window width
    winHeight     = 500, // window Height
    probability   = 0.9, // Death probability
    neighbourDistance   = 30,  // Neighbour Distance 
    sizeParticle  = 10,  // Size (radius) of particle
    numParticles  = 1000, // Number of particles
    arrParticles;
    
    
function setup()
{  
  createCanvas(winWidth,winHeight);
  arrParticles = [];
  for (var i = 0; i < numParticles; i++) {
    arrParticles.push(new Particle(random(winWidth), random(winHeight), sizeParticle));
  }
  
  for (var i = 0; i < numParticles; i++) {
    rand = random(1);
    if(rand >= probability){
      arrParticles[i].dead = false;
    }
    else{
      arrParticles[i].dead = true;
    }
      
    
}
    btn = createButton('Process');
    btn.mousePressed(process);
}

function draw()
{
  background(51);
  for (var i = 0; i < numParticles; i++) {
    arrParticles[i].draw();
    }
}

function process(){
  for (var i = numParticles - 1; i >=0; i--) {
      arrParticles[i].process();      
}
removeDead();

}

function removeDead(){
  tempArray = arrParticles;
  for (var i = numParticles -1; i >=0; i--){
    particle = tempArray[i];
    if(particle.dead){
      tempArray.splice(i,1);
    }
  }
  numParticles = tempArray.length;
  arrParticles = tempArray;
}

function mousePressed() {
  for (var i = 0; i < numParticles; i++){
    if(arrParticles[i].mousePressed()){
        arrParticles[i].switchState();
    }    
  }
}
