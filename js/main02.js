function random(min, max) {
  return Math.random() * (max - min) + min;
}
const alphabet = ["A", "B", "C", "D", "E", "F", "H"];
$("#mainVisual").on("click", function (e) {
  console.log(e);
  const w = random(50, 150);
  const tag = `<div style="width:${w}px;height:${w}px; border-radius:100%; background-color:#000; transform:translate(-50%,-50%); position:absolute;left:${e.clientX}px;bottom:0" class="dot"></div>`;
  // const tag = `<div style="font-size:${w}px; font-weight:900; color:#000; transform:translate(-50%,-50%); position:absolute;left:${e.clientX}px;top:${e.clientY}px" class="dot">S</div>`;
  $("#mainVisual .inner").append(tag);
  gsap.to(".dot", { y: -250, ease: "elastic", duration: random(2, 4) });
});
