function collatz(num){
  this.number = num;
  this.initNum = num;
  this.values = [];
  this.steps = 0;
  this.highestVal = 0;
  this.heightScale = 1;
  this.widthScale = 1;
}
collatz.prototype.loadNums = function () {
  while (this.number > 1) {
    this.number = nextNum(this.number);
    if(this.number > this.highestVal) this.highestVal=this.number;
    this.values.push(this.number);
  //  console.log(this.number);
  }
  this.steps = this.values.length;
};
collatz.prototype.calcScale = function (){
  this.heightScale = roundToTwo(h / (this.highestVal + 400));
  this.widthScale = roundToTwo(w / (this.steps));


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
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}
