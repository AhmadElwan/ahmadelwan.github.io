/** Site behaviour: reveal on scroll (the live clock is components/site/Clock.tsx). Everything else is CSS. */
export const siteScript = `/*swiss-fx*/
(function () {
  try {
    var menu = document.querySelector(".s-menu");
    if (menu) {
      menu.addEventListener("click", function (e) { if (e.target.closest && e.target.closest("a")) menu.removeAttribute("open"); });
      document.addEventListener("click", function (e) { if (menu.hasAttribute("open") && !menu.contains(e.target)) menu.removeAttribute("open"); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.hasAttribute("open")) { menu.removeAttribute("open"); menu.querySelector("summary").focus(); } });
    }
  } catch (err) {}
  try {
    var items = [].slice.call(document.querySelectorAll("[data-rv]"));
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if ("IntersectionObserver" in window && !reduce) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.08 });
      items.forEach(function (i, n) { i.style.setProperty("--d", ((n % 4) * 70) + "ms"); io.observe(i); });
    } else items.forEach(function (i) { i.classList.add("in"); });
  } catch (err) {
    [].slice.call(document.querySelectorAll("[data-rv]")).forEach(function (i) { i.classList.add("in"); });
  }
})();`;
