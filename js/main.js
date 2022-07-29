const blob = $("#blobs .blob");
//10~20
function random(min, max) {
  return Math.random() * (max - min) + min;
}
function moveRandom(_blob) {
  gsap.to(_blob, {
    scale: random(0.5, 1),
    x: random(-500, 500),
    y: random(-80, 80),
    duration: random(5, 10),
    ease: "power2",
    onComplete: function () {
      moveRandom(_blob);
    },
  });
}
blob.each(function (idx, item) {
  moveRandom(item);
});

// const typed = new Typed("#typed", {
//   stringsElement: "#typed-strings",
// });
const typed = new Typed("#typing .inner", {
  // Waits 1000ms after typing "First"
  strings: [
    '<span><strong>i</strong></span><span class="dot"><strong>·</strong></span><span>programming</span><span class="dot"><strong>·</strong></span><span><strong>javascript</strong></span>',
    '<span><strong>i</strong></span><span class="dot">·</span><span>markup</span><span class="dot">·</span><span><strong>html5</strong></span>',
    '<span><strong>i</strong></span><span class="dot">·</span><span>designing</span><span class="dot">·</span><span><strong>scss/css</strong></span>',
    '<span><strong>i</strong></span><span class="dot">·</span><span>prototyping</span><span class="dot">·</span><span><strong>figma</strong,></span>',
    '<span><strong>i</strong></span><span class="dot">·</span><span>loving</span><span class="dot">·</span><span><strong>you</strong></span>',
  ],
  backDelay: 1500,
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
});
const circle = $("#circle")[0];
new CircleType(circle);
