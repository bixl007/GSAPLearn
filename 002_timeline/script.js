var tl = gsap.timeline();

tl.to("#box1", {
  x: 1500,
  rotate: 360,
  duration: 1.5,
  delay: 1,
  repeat: -1,
  yoyo: true,
});

tl.to("#box2", {
  x: 1500,
  backgroundColor: "yellow",
  duration: 1.5,
//   delay: 2.5,
  repeat: -1,
  yoyo: true,
});
tl.to("#box3", {
  x: 1500,
  scale: 0.5,
  borderRadius: "50%",
  duration: 1.5,
//   delay: 4,
  repeat: -1,
  yoyo: true,
});
