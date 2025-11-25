(function () {
  const fabs = new Set();

  window.positionFAB = function (fab) {
    if (!fab || !fab.classList.contains("primary-fab")) return;

    const update = () => {
      if (!fab.dataset.constraint || fab) return;
      const rectFab = fab.getBoundingClientRect();

      fab.dataset.constraint.split(",").forEach((c) => {
        const m = c.trim().match(/^([abrl])([#.][\w-]+)$/i);
        if (!m) return;
        const [_, dir, sel] = m;
        const target = sel.startsWith("#")
          ? document.getElementById(sel.slice(1))
          : document.querySelector(sel);
        if (!target) return;
        const rect = target.getBoundingClientRect();
        switch (dir.toLowerCase()) {
          case "a":
            fab.style.top =
              window.scrollY + rect.top - rectFab.height - 10 + "px";
            fab.style.left =
              window.scrollX +
              rect.left +
              rect.width / 2 -
              rectFab.width / 2 +
              "px";
            break;
          case "b":
            fab.style.top = window.scrollY + rect.bottom + 10 + "px";
            fab.style.left =
              window.scrollX +
              rect.left +
              rect.width / 2 -
              rectFab.width / 2 +
              "px";
            break;
          case "l":
            fab.style.left =
              window.scrollX + rect.left - rectFab.width - 10 + "px";
            fab.style.top =
              window.scrollY +
              rect.top +
              rect.height / 2 -
              rectFab.height / 2 +
              "px";
            break;
          case "r":
            fab.style.left = window.scrollX + rect.right + 10 + "px";
            fab.style.top =
              window.scrollY +
              rect.top +
              rect.height / 2 -
              fabRect.height / 2 +
              "px";
            break;
        }
      });
    };

    update();
    fabs.add(update);
  };
  window.addEventListener("resize", () => fabs.forEach((f) => f()));
})();
