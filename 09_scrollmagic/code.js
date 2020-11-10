// ScrollMagic Animation

if (document.documentElement.clientWidth > 790) {
  // Initialize Controller
  let controller = new ScrollMagic.Controller();

  // 1. Parallax Background

  new ScrollMagic.Scene({
    triggerElement: "#parallax",
    triggerHook : "onEnter"
  })
  .duration('200%')
  .setTween('#parallax', {
    backgroundPosition: "50% 100%",
    ease: Linear.easeNone 
  })
  // .addIndicators()
  .addTo(controller)


  // 2. Slide In
  new ScrollMagic.Scene({
    triggerElement: '#slideIn',
    triggerHook: 'onLeave'
  })
  .setPin('#slideIn')
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: "#slideIn2",
    triggerHook: "onLeave",
  })
  .setPin("#slideIn2")
  .addTo(controller);



  // 3. SlideIn2  
  const fromLeftTimeline = gsap.timeline()
  const fadeTimeline = gsap.timeline()
  const fromBottomTimeline = gsap.timeline()

  // SlideIn2 Timelines:
  // From Left
  fromLeftTimeline
  .from('.left', {
    x: -500,
    duration: 1
  })
  .to('.left', {
    x: 0,
    duration: 1
  })

  // Opacity
  fadeTimeline
  .from('.opacity', {
    autoAlpha: 0
  })
  .to('.opacity', {
    autoAlpha: 1
  })

  // From Bottom
  fromBottomTimeline
  .from('.bottom', {
    y: 400,
    duration: 1
  })
  .to('.bottom', {
    y: 0,
    duration: 1
  })


  // From Left Scene
  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset: 300
  })
  .setTween(fromLeftTimeline)
  .duration(400)
  .addTo(controller)

  // Opacity Scene
  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset: 300
  })
  .setTween(fadeTimeline)
  .duration(400)
  .addTo(controller)

  // From bottom scene
  new ScrollMagic.Scene({
    triggerElement: '#slideIn2',
    offset: 300
  })
  .setTween(fromBottomTimeline)
  .duration(400)
  .addTo(controller)
}