// 1. AUFGABE: Head touches Edge
// 2. FUNCTION FOR DISPLAYING SCORE!
// 3. CLICK FUNCTION TO CREATE NEW FOOD

let s
// SCL us our grid system
let scl = 20

let food
function setup () {
  createCanvas(600,600)

  // Limit the framerate
  frameRate(10)
  s = new Snake()
  pickLocation()
}

function draw () {
  background(51)

  // If the snake eats food
  if (s.eat(food)){
    // Draw a new fruit
    pickLocation()
  }
  

  // Test if snake died
  s.death()
  // Update the position of snake
  s.update()
  // Show / draw the snake in the canvas
  s.show()
  // display score

  fill(255,0,0)
  rect(food.x, food.y, scl, scl)
}

function pickLocation () {
  let cols = floor(width / scl)
  let rows = floor(height / scl)

  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(scl)
}

// 3. CLICK FUNCTION TO CREATE NEW FOOD
function mouseClicked (){
  // pickLocation()
  s.total++;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    // Move vertically up
    s.dir(0, -1)
  } else if (keyCode === DOWN_ARROW) {
    // Move vertically down
    s.dir(0, 1)
  } else if (keyCode === LEFT_ARROW) {
    // Move Horizonatally left
    s.dir(-1, 0)
  } else if (keyCode === RIGHT_ARROW) {
    // Move Horizonatally right
    s.dir(1, 0)
  }
}