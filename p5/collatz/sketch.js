var w = 1800;
var h = 800;
var num = 109;
var cols = [];
var display;
var lines = [];
function setup()
{
  createCanvas(w,h);
  params = getURLParams();
  if(params.number)
  {
    nums = split(params.number, ",");
    for(i in nums){
      cols.push(new collatz(nums[i]))
    }
  }
  init();
}
function init(){
  for(i in cols)
  {
    cols[i].loadNums();
    cols[i].calcScale();
  }
  display = createP("");
//  display.html("Number: " + this.num + " Highest Value: " + coll.highestVal + " Steps: " + coll.steps);
}

function draw()
{
  translate(10,h-20);
  background(51);
  stroke(255);
  for(i in cols){

    drawCollatz(cols[i]);
  }
  noLoop();
}

function drawCollatz(c){
  for(i in c.values){
  //  console.log(i, c.values[i]);
  //  console.log(parseInt(i)*c.widthScale,-1 * (parseInt(c.values[parseInt(i)]) * c.heightScale), (parseInt(i) + 1)*c.widthScale, -1 * parseInt(c.values[parseInt(i)+1])*c.heightScale);
    line(parseInt(i)*c.widthScale,-1 * (parseInt(c.values[parseInt(i)]) * c.heightScale), (parseInt(i) + 1)*c.widthScale, -1 * parseInt(c.values[parseInt(i)+1])*c.heightScale);
  }
}
