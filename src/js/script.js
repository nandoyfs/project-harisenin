const left = document.getElementById("left");
const right = document.getElementById("right");
const scroller = document.getElementById("slider-img");

scroller.addEventListener("scroll", () => {
  if (scroller.scrollLeft === 0) {
    left.classList.add("opacity-20");
  } else if (scroller.scrollLeft > 0) {
    left.classList.remove("opacity-20");
  }
  const isAtRightEnd =
    scroller.scrollLeft + scroller.clientWidth === scroller.scrollWidth;

  if (isAtRightEnd) {
    right.classList.add("opacity-20");
  } else {
    right.classList.remove("opacity-20");
  }
});

left.addEventListener("click", () => {
  const scroller = document.getElementById("slider-img");
  scroller.scrollBy(-200, 0);
});

right.addEventListener("click", () => {
  const scroller = document.getElementById("slider-img");
  scroller.scrollBy(200, 0);
});
