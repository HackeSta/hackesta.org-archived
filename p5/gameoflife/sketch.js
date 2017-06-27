function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


var w = 500;
var h = 500;
var s = 10;
var cells;
function setup()
{  
  createCanvas(w,h);
  cells = make2DArray(s,s);
  for (var i = 0; i < s; i++) {
    for (var j = 0; j < s; j++) {
      cells[i][j] = new cell(i, j);
    }
  }
    for (var i = 0; i < s; i++) {
      for (var j = 0; j < s; j++) {
        rand = random(1);
        if(rand >= 0.9){
          cells[i][j].dead = false;
        }
        else{
          cells[i][j].dead = true;
        }
      }
      
    
}
    btn = createButton('Process');
    btn.mousePressed(process);
}

function draw()
{
  background(255);
  for (var i = 0; i < s; i++) {
    for (var j = 0; j < s; j++) {
      cells[i][j].draw();
    }
}
}

function process(){
  for (var i = 0; i < s; i++) {
    for (var j = 0; j < s; j++) {
      cells[i][j].process();
    }  
}
}

function mousePressed() {
  for (var i = 0; i < s; i++){
    for (var j = 0; j < s; j++){
      if(cells[i][j].mousePressed()){
        cells[i][j].switchState();
      }
    }
  }
}
