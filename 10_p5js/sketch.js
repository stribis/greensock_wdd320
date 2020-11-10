let dot

function setup () {
  createCanvas(600, 600)
  dot = new Dot(width/2, height/2)
}

function draw () {
  background('#222')
  dot.display()
}

function keyPressed() {
  
  // LEFT_ARROW | RIGHT_ARROW | UP_ARROW | DOWN_ARROW
  if (keyCode === LEFT_ARROW ){
    dot.move(-10, 0)
  } else if ( keyCode === RIGHT_ARROW ) {
    dot.move(10, 0)
  } else if ( keyCode === UP_ARROW ) {
    dot.move(0, -10)
  } else if ( keyCode === DOWN_ARROW ) {
    dot.move(0, 10)
  }

}