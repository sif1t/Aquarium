//locomotive js - smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap to animate
gsap.from(".nlink",{
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2.easeout,
    opacity: 0
})

// sheryjs to animate 
Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });