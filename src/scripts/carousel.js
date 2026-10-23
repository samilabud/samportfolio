// Screenshot carousels inside project cards. The track scrolls with CSS
// scroll-snap (so swipe works on touch); arrows and dots just drive it.
export default function initCarousels() {
  document.querySelectorAll(".js-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".project-carousel__track");
    const slides = [...track.children];
    if (slides.length < 2) return;

    const prev = carousel.querySelector(".project-carousel__btn--prev");
    const next = carousel.querySelector(".project-carousel__btn--next");
    const dotsWrap = carousel.querySelector(".project-carousel__dots");

    const dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "project-carousel__dot";
      dot.setAttribute("aria-label", `Show screenshot ${i + 1} of ${slides.length}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
      return dot;
    });

    const current = () => Math.round(track.scrollLeft / track.clientWidth);

    function goTo(i) {
      const index = (i + slides.length) % slides.length;
      track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
    }

    function update() {
      const index = current();
      dots.forEach((dot, i) => dot.setAttribute("aria-current", i === index));
      slides.forEach((slide, i) => slide.setAttribute("aria-hidden", i !== index));
    }

    prev.addEventListener("click", () => goTo(current() - 1));
    next.addEventListener("click", () => goTo(current() + 1));
    track.addEventListener("scroll", update, { passive: true });
    carousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") goTo(current() - 1);
      if (e.key === "ArrowRight") goTo(current() + 1);
    });

    carousel.classList.add("is-ready");
    update();
  });
}
