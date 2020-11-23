
// This is our snake class

function Snake () {

  // Define the global variables
  // Starting position
  this.x = scl
  this.y = scl

  // Vertical and Horizontal speed
  this.xSpeed = 1
  this.ySpeed = 0

  // How long is the snake
  this.total = 0

  // Position of tail
  this.tail = []


  // Snake Eat

  this.eat = function (pos) {
    let d = dist(this.x, this.y, pos.x, pos.y) 
    if (d < 1) {
      // Snake ate food
      this.total++
      return true
    } else {
      return false
    }
  }

  // Snake Direction
  this.dir = function (x, y) {
    this.xSpeed = x
    this.ySpeed = y
  }


  // Snake Death
  this.death = function () {
    // Head touches Tail
    for (let i = 0; i < this.tail.length; i++){
      let pos = this.tail[i]
      let d = dist( this.x, this.y, pos.x, pos.y)
      if( d < 1 ){
        console.log('Game Over, Starting over')
        this.total = 0
        this.tail = []
      }
    }
    // 1. AUFGABE: Head touches Edge

    // if ( this.x <= 0 || this.x + scl >= width || this.y <= 0 || this.y + scl >= height ){
    //   console.log(' YOu died')
    //   this.total = 0
    //   this.tail = []
    // }
    

  }
  // Snake Update
  this.update = function () {
    // Update tail
    for (let i = 0; i < this.tail.length -1; i++){
      this.tail[i] = this.tail[i + 1]
    }
    // Update total
    if (this.total >= 1){
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xSpeed * scl
    this.y = this.y + this.ySpeed * scl

    this.x = constrain(this.x, 0, width - scl)
    this.y = constrain(this.y, 0, height - scl)
  }
  // Snake Show


  this.show = function(){
    fill(255)
    for(let i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl)
    }
    rect(this.x, this.y, scl, scl)
  }


  // 2. FUNCTION FOR DISPLAYING SCORE!
  // this.score = function () {
  //   textSize(32);
  //   fill(255);
  //   text(`Score: ${this.total}`,0,0)
  // }
}