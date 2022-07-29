function random(min, max) {
  return Math.random() * (max - min) + min;
}
$("#mainVisual").on("click", function (e) {
  console.log(e);
  const w = random(50, 150);
  const tag = `<div style="width:${w}px;height:${w}px; border-radius:100%; background-color:#000; transform:translate(-50%,-50%); position:absolute;left:${e.clientX}px;top:${e.clientY}px" class="dot"></div>`;
  $("#mainVisual .inner").append(tag);
  gsap.to(".dot", { y: 500, ease: "elastic", duration: random(2, 4) });
});
