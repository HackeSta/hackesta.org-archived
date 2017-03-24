
function Value(val_){
  this.val = val_
  this.scale = 0.05;
  this.y = h- (this.val * this.scale);
}

Value.prototype.draw = function (i) {
  line(i, h, i, this.y)
};
