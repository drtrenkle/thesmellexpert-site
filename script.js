// The Smell Expert — site interactions
// Kept intentionally small and dependency-free.

document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header goes solid after scrolling past the hero
  var header = document.getElementById('siteHeader');
  var onScroll = function () {
    if (window.scrollY > 40) {
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Animate the stat-strip numbers once they scroll into view
  var stats = document.querySelectorAll('.stat-num');
  if ('IntersectionObserver' in window && stats.length) {
    var animateStat = function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var current = 0;
      var step = Math.max(1, Math.round(target / 30));
      var tick = function () {
        current += step;
        if (current >= target) {
          el.textContent = target;
        } else {
          el.textContent = current;
          requestAnimationFrame(tick);
        }
      };
      tick();
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    stats.forEach(function (el) { observer.observe(el); });
  } else {
    stats.forEach(function (el) {
      el.textContent = el.getAttribute('data-count');
    });
  }

  /*
    HOOKING UP A GOOGLE FORM (optional)
    ------------------------------------
    Dr. Trenkle mentioned a simple Google Form is a fine alternative to a
    plain "mailto:" link. To switch to one:

    1. Create a Google Form with the fields you want (client name, date of
       injury, mechanism, records available, etc.) and set the form to
       send responses to pi@laent.com under Settings > Responses.
    2. Click Send > the "<>" embed icon and copy the iframe HTML it gives you.
    3. In index.html, find the "OPTIONAL" comment inside the #contact
       section and paste that iframe in place of (or alongside) the
       "Email pi@laent.com" button.

    No JavaScript changes are required for this — the iframe embed is
    self-contained.
  */
});
