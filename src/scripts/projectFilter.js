const matches = (row, filter) => {
  if (filter === "all") return true;
  if (filter === "mobile") return row.dataset.platform === "mobile";
  return row.dataset.origin === filter;
};

export default function initProjectFilter() {
  const bar = document.querySelector(".project-filters");
  const wrapper = document.querySelector(".project-wrapper");
  if (!bar || !wrapper) return;

  const rows = [...wrapper.querySelectorAll(".row[data-origin]")];
  const earlier = wrapper.querySelector(".earlier-projects");
  const learningHeading = wrapper.querySelector(".earlier-projects__subheading");
  const buttons = [...bar.querySelectorAll("[data-filter]")];
  let earlierWasOpen = earlier ? earlier.open : false;
  let current = "all";

  // Filtering needs JS, so the bar stays hidden without it.
  bar.hidden = false;

  const apply = (filter) => {
    if (current === "all" && filter !== "all" && earlier) {
      earlierWasOpen = earlier.open;
    }
    current = filter;

    rows.forEach((row) => {
      row.hidden = !matches(row, filter);
    });
    wrapper.classList.toggle("is-filtered", filter !== "all");

    if (earlier) {
      const anyVisible = rows.some((row) => earlier.contains(row) && !row.hidden);
      earlier.hidden = !anyVisible;
      // Open the collapsed section so matching older projects aren't missed.
      earlier.open = filter === "all" ? earlierWasOpen : anyVisible;
    }
    if (learningHeading) {
      learningHeading.hidden = !rows.some(
        (row) => row.dataset.origin === "coursework" && !row.hidden
      );
    }

    buttons.forEach((btn) => {
      const active = btn.dataset.filter === filter;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  };

  bar.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (btn) apply(btn.dataset.filter);
  });
}
