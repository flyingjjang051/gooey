function moveMenu(e) {
  gsap.to(".floatingMenu", {
    left: e.clientX - 40,
    top: e.clientY - 40,
    duration: 1.25,
    ease: "power4",
  });
}
$(window).on("mousemove", (e) => {
  moveMenu(e);
});
const li = $(".floatingMenu li");
const total = li.length;
const radius = 110;
console.log("🚀 ~ file: main03.js ~ line 11 ~ total", total);
li.each(function (idx, item) {
  $(item).attr({
    "data-left": Math.cos(Math.PI * 2 * (idx / total)) * radius,
    "data-top": Math.sin(Math.PI * 2 * (idx / total)) * radius,
  });
});
$(".floatingMenu button").on("click", function () {
  if (!$(this).parent().hasClass("on")) {
    $(window).off();
    $(this).parent().addClass("on");
    gsap.to(li, {
      left: (idx, item) => {
        return $(item).data("left");
      },
      top: (idx, item) => {
        return $(item).data("top");
      },
      ease: "back",
      duration: 1.2,
      stagger: {
        each: 0.05,
      },
    });
  } else {
    $(this).parent().removeClass("on");
    gsap.to(li, {
      left: 0,
      top: 0,
      ease: "back.in",
      duration: 1.2,
      stagger: {
        each: 0.05,
        from: "end",
      },
      onComplete: function () {
        $(window).on("mousemove", function (e) {
          moveMenu(e);
        });
      },
    });
  }
});
