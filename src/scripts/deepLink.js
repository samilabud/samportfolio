// samilabud.com/plantpal (rewritten to index.html in netlify.toml) and
// #plantpal both scroll to the project row with that id.
export default function initDeepLink() {
  const slug =
    window.location.pathname.replace(/^\/+|\/+$/g, "") ||
    window.location.hash.slice(1);
  if (!slug || !/^[\w-]+$/.test(slug)) return;

  const target = document.querySelector(`.project-wrapper .row[id="${slug}"]`);
  if (!target) return;

  // Wait for images and fonts so the position doesn't shift after scrolling
  const scroll = () => target.scrollIntoView({ block: "start" });
  if (document.readyState === "complete") scroll();
  else window.addEventListener("load", scroll, { once: true });
}
