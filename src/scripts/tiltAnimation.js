import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
