class Dot {
  constructor ( x, y ){
    this.x = x
    this.y = y
    this.d = 50
  }

  display () {
    fill(255, 0, 0)
    circle(this.x, this.y, this.d)
  }

  move ( amountX, amountY) {
    this.x = this.x + amountX
    this.y = this.y + amountY
  }
 }