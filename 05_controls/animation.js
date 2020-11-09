// Animation for timeline

const tl = gsap.timeline()

tl.to('.red', { x: 500, duration: 3 })
  .to('.orange', { y: 150, x: 1000, duration: 3 }, '-=1.5')
  .to('.green', { x: 300, y: 250, scale: 2, duration: 3 }, '-=1.5')
  .to('.pink', { x: 600, y: 200,opacity: 0, duration: 3 }, '-=1.5')
  .to('.blue', { x: 700, y: 200,rotation: 40, duration: 3 }, '-=1.5')
tl.pause()

const michael = gsap.to('#play', {y: 1000, duration: 6})
michael.pause()


// Resumes animation from a paused state
document.querySelector('#play').addEventListener('click', () => {
  console.log('Playing animation')
  tl.resume()
  michael.resume()
})

// Pauses an animation while it is playing
document.querySelector('#pause').addEventListener('click', () => {
  console.log('Pausing animation')
  tl.pause()
})

// Reverse the direction of the timeline
document.querySelector('#reverse').addEventListener('click', () => {
  console.log('Reversing animation')
  tl.reverse()
})

// Doubleing animation playback
document.querySelector('#accelerate').addEventListener('click', () => {
  console.log('Doubleing animation playback')
  tl.timeScale(2)
})

// Slowing down playback
document.querySelector('#slow').addEventListener('click', () => {
  console.log('Slowing down playback')
  tl.timeScale(0.5)
})

// Go to a point in the timeline
document.querySelector('#seek').addEventListener('click', () => {
  console.log('Seeking to 2s')
  tl.seek(2)
})

// Go to a point in the timeline
document.querySelector('#progress').addEventListener('click', () => {
  console.log('go to 50%')
  tl.progress(0.5)
})

// Restart an animation
document.querySelector('#restart').addEventListener('click', () => {
  console.log('restarting animation')
  tl.restart()
})