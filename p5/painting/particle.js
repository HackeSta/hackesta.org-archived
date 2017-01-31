function particle(x_, y_, magnitude_, angle_, mass_) 
{
  this.x = x_;
  this.y = y_;
  this.px = x_;
  this.py = y_;
  this.magnitude = magnitude_;
  this.angle = angle_;
  this.mass = mass_;

  this.reset = function(x_, y_, magnitude_, angle_, mass_) {
    this.x = x_;
    this.y = y_;
    this.px = x_;
    this.py = y_;
    this.magnitude = magnitude_;
    this.angle = angle_;
    this.mass = mass_;
  }
  
  this.gravitate = function(Z) {
    var F, mX, mY, A;
    if( sq( this.x - Z.x ) + sq( this.y - Z.y ) != 0 ) {
      F = this.mass * Z.mass;
      mX = ( this.mass * this.x + Z.mass * Z.x ) / ( this.mass + Z.mass );
      mY = ( this.mass * this.y + Z.mass * Z.y ) / ( this.mass + Z.mass );
      A = findAngle( mX - this.x, mY - this.y );
      
      mX = F * cos(A);
      mY = F * sin(A);
      
      mX += this.magnitude * cos(this.angle);
      mY += this.magnitude * sin(this.angle);
      
      this.magnitude = sqrt( sq(mX) + sq(mY) );
      this.angle = findAngle( mX, mY );
    }
  }

  this.repel = function(Z) {
    var F, mX, mY, A;
    if( sq( this.x - Z.x ) + sq( this.y - Z.y ) != 0 ) {
      F = this.mass * Z.mass;
      mX = ( this.mass * this.x + Z.mass * Z.x ) / ( this.mass + Z.mass );
      mY = ( this.mass * this.y + Z.mass * Z.y ) / ( this.mass + Z.mass );
      A = findAngle( this.x - mX, this.y - mY );
      
      mX = F * cos(A);
      mY = F * sin(A);
      
      mX += this.magnitude * cos(this.angle);
      mY += this.magnitude * sin(this.angle);
      
      this.magnitude = sqrt( sq(mX) + sq(mY) );
      this.angle = findAngle( mX, mY );
    }
  }
  
  this.deteriorate = function() {
    this.magnitude *= 0.925;
  }
  
  this.update = function() {
    
    this.x += this.magnitude * cos(this.angle);
    this.y += this.magnitude * sin(this.angle);
    
  }
  
  this.display = function() {
    strokeWeight(3);
    line(this.px,this.py,this.x,this.y);
    this.px = this.x;
    this.py = this.y;
  }
}

function findAngle(x, y) {
  var theta;
  if(x == 0) {
    if(y > 0) {
      theta = HALF_PI;
    }
    else if(y < 0) {
      theta = 3*HALF_PI;
    }
    else {
      theta = 0;
    }
  }
  else {
    theta = atan( y / x );
    if(( x < 0 ) && ( y >= 0 )) { theta += PI; }
    if(( x < 0 ) && ( y < 0 )) { theta -= PI; }
  }
  return theta;
}
 