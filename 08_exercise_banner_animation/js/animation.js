// 1. Timeline for web purple logo and white SAE logo
// const web_and_sae_logos = gsap.timeline()
// 2. Timeline for orange line and text
// const line_and_text = gsap.timeline()
// 3. Timeline for unordered list
const ul_tl = gsap.timeline()
// 4. Timeline for cta
const cta_tl = gsap.timeline().pause()


// 1. Animation for web purple logo and white SAE logo
// web_and_sae_logos
// .to('.web', {
//   scale: 1.4, 
//   ease: 'linear', 
//   duration: 0.6 
// })
// .to('.web', {
//   scale: 1, 
//   ease: 'bounce.out', 
//   duration: 0.6 
// })
// .to('.web', {
//   scale: 1.4, 
//   ease: 'linear', 
//   duration: 0.6 
// })
// .to('.web', {
//   scale: 1, 
//   ease: 'bounce.out', 
//   duration: 0.6 
// })
// .to('.web', {
//   scale: 1.4, 
//   ease: 'linear',
//   duration: 0.6 
// })
// .to('.web', {
//   scale: 1,
//   ease: 'bounce.out', 
//   duration: 0.6 
// })
// .set('.web', {
//   autoAlpha: 0
// })
// .fromTo('.sae', {
//   opacity: 0, 
//   duration: 0.3, 
//   left: '-100%'
// }, 
// {
//   opacity: 1, 
//   duration: 0.3, 
//   left: '50%', 
//   onComplete: function(){
//     line_and_text.resume()
//   }}
// )


// 2. Animation for orange line and text

// line_and_text
// .fromTo('.line', {
//   autoAlpha: 0, 
//   duration: 0.2
// }, 
// {
//   autoAlpha: 1, 
//   duration: 0.2,  
//   repeat: 6
// },'+=1')
// .to('.text', {
//   text:"Programmiere \n deine \n Zukunft",
//   duration: 2, 
//   ease: 'linear'
// })
// .to('.text', {
//   top: '10%', 
//   ease: 'elastic.out(1, 0.3)', 
//   duration: 2, 
//   onComplete: function(){
//     console.log('done with line and text')
//     ul_tl.resume()
//   }
// })
                
// 3. Animation for unordered list

ul_tl
.to('ul li', { 
  opacity: 1,
  stagger: {
    amount: 1.8,
    from: 0
  },

  onStart: function () {
    console.log('started with the bulleted list')
  }
})
.to('ul li', {
  opacity: 0,
  stagger: {
    amount: 0.5,
    from: 6
  },
  onComplete: function (){
    cta_tl.resume()
  }  
}, '+=1')

// 4. Animation for Call to action

cta_tl
.set('.cta', {
  display: 'block',
})
.to('.cta', {
  display: 'block',
  autoAlpha: 1,
  padding: '1.4em 0',
  duration: 1,
  height: 'auto'
})

// 5. Small animation effect when the link is clicked

document.querySelector('a').addEventListener('click', e => {
  cta_tl.to('.cta', {
    scale: 1.2,
    duration: 1
  }),
  cta_tl.to('.cta', {
    scale: 1,
    duration: 1
  })
})