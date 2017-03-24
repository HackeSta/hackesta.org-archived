function collatz(num){
  this.initial = num;
  this.num = num;
  this.values = [];
  this.highestVal = 0;
  this.steps = 0;
  this.xa = 0;
  this.xb = 0;
  this.ya = 0;
  this.yb = 0;
}

collatz.prototype.loadNums = function () {
  while (this.num > 1) {
    this.num = nextNum(this.num);
    if(this.num > this.highestVal) this.highestVal=this.num;
    this.values.push(new Value(this.num));
  }
  this.steps = this.values.length;
};

collatz.prototype.draw = function(i){
  this.xa = i;
  this.xb = i;
  this.ya = height;
  this.yb = height-(this.highestVal * 0.05);
  line(this.xa, this.ya, this.xb, this.yb);
}

collatz.prototype.inBounds = function(x,y){
  if(x <= this.xa && x >= this.xb && y <= this.ya && y >=this.yb ){
    return true;
  }
  else {
    return false;
  }
}
function nextNum(num)
{
    if(isEven(num)){
    return num /2;
    }
    else if(isOdd(num)){
    return (3*num) + 1
    }
}
function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
