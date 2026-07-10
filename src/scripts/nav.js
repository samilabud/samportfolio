export default function initNav() {
  const nav = document.querySelector(".site-nav");
  const links = document.querySelectorAll(".site-nav__links a[href^='#']");
  const sections = Array.from(links)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!nav || !links.length) return;

  const updateNav = () => {
    nav.classList.toggle("site-nav--scrolled", window.scrollY > 40);

    const scrollPos = window.scrollY + nav.offsetHeight + 80;
    let activeId = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        activeId = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${activeId}`
      );
    });
  };

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();
}
