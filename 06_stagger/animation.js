// Stagger animates an array of elements with a small delay between the items in the array

gsap.to('button',{
  y: 300,
  opacity: 0.5,
  // it is declared in the object parameter and can contain additional information like 
  // amount (delay between items)
  // from (direction if the stagger)
  // and more : see stagger_exercise
  stagger: {
    amount: 1,
    from: '7'
  }
})