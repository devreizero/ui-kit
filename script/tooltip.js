document.querySelectorAll(".tooltip").forEach((target) => {
  target.addEventListener("mouseenter", () => showTooltip(target));
  target.addEventListener("mouseleave", hideTooltip);

  target.addEventListener("focus", () => showTooltip(target));
  target.addEventListener("blur", hideTooltip);
});

function showTooltip(target) {
  tooltip.textContent = target.getAttribute("aria-label");

  const rect = target.getBoundingClientRect();

  const tooltipRect = tooltip.getBoundingClientRect();
  const margin = 8;

  let top = rect.bottom + margin;
  let left = rect.left + rect.width / 2 - tooltipRect.width / 2;

  if (left < margin) left = margin;
  if (left + tooltipRect.width > window.innerWidth - margin) {
    left = window.innerWidth - tooltipRect.width - margin;
  }

  if (top + tooltipRect.height > window.innerHeight) {
    top = rect.top - tooltipRect.height - margin;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  setTimeout(() => tooltip.classList.add("show"), 40);
}

function hideTooltip() {
  tooltip.classList.remove("show");
}
