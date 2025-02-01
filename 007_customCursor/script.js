var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#overlay");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.3,
});
});

imageDiv.addEventListener("mouseenter", function (dets) {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "back.out",
        backgroundColor: "#ffffff5e"
    });
});

imageDiv.addEventListener("mouseleave", function (dets) {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "back.out",
        backgroundColor: "#fff"
  });
});
