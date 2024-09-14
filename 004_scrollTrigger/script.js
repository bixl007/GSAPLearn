gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page1 #box",
    scroller: "body",
    start: "top 50%",
    scrub: 2,
  },
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    start: "top 60%",
    scrub: 2,
  },
});
gsap.from("#page3 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    start: "top 100%",
    scrub: 2,
  },
});
