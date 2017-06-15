function cell(i,j){
  this.i = i;
  this.j = j;
  this.x = i * 50;
  this.y = j * 50;
}

cell.prototype.show = function(){
};
cell.prototype.draw = function() {
  stroke(3);
  if(!this.dead)
  {
    fill(0,255,0);
  }
  else{
    fill(255);
  }
  rect(this.x, this.y, w, w);
};

cell.prototype.process = function(){
  var total = 0;
  for (var xoff = -1; xoff <= 1; xoff++) {
    var i = this.i + xoff;
    if (i < 0 || i >= s) continue;

    for (var yoff = -1; yoff <= 1; yoff++) {
      var j = this.j + yoff;
      if (j < 0 || j >= s) continue;

      var neighbor = cells[i][j];
      if (!neighbor.dead) {
        total++;
      }
    }
  }
  if(!this.dead){
    if(!(total === 2 || total === 3)){
      this.dead = true;
    }
    if(total < 2) console.log("lonely");
    if(total > 3) console.log("overcrowd");
  }
  else{
    if(total === 3){
      this.dead = false;
    }
  }
};
