var cols;
h = 800;
w = 1800;
start = 1;
end = 1000;

var display;
var inputStart;
var inputEnd;
var calculate;


function setup()
{
  createCanvas(w,h);
  init();
  display = createP("");
  inputStart = createInput();
  inputEnd = createInput();
  calculate = createButton("Calculate");
  calculate.mousePressed(reload);
}
function init(){
  cols = [];
  for(i=start; i < end; i++){
    cols.push(new collatz(i));
    cols[i - 1].loadNums();
  }
}

function draw()
{
  background(51);
  stroke(255);
  strokeWeight(1);
  for(i in cols){
    cols[i].draw(i);
  }
}

function mouseMoved(){
  if(mouseX > 0 && mouseX < cols.length && mouseY < height && cols[mouseX].inBounds(mouseX, mouseY))
  {
    //console.log(cols[mouseX].highestVal, cols[mouseX].initial);
    display.html("initial: " + cols[mouseX].initial + " value: " + cols[mouseX].highestVal);

  }
  else{
  display.html("initial: " + 0 + " value: " + 0);
  }
}


function reload(){

  start = inputStart.value();
  end = inputEnd.value();
  if(start >=end){
      alert("Invalid values");
  }
  else{
    init();
    //redraw();

  }
}
