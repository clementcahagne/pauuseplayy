document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ===== Mobile nav toggle =====
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
    // Close mobile nav on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  // ===== Scroll-reveal (skip if reduced motion) =====
  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    document
      .querySelectorAll(".fade-in, .fade-in-left, .fade-in-right")
      .forEach((el) => observer.observe(el));
  } else {
    // Reduced motion: show immediately
    document
      .querySelectorAll(".fade-in, .fade-in-left, .fade-in-right")
      .forEach((el) => el.classList.add("visible"));
  }

  // ===== Active nav link (works with both /page and /page.html) =====
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const currentBase = path === "/" ? "/" : path.replace(/\.html$/, "");

  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("http")) return;
    const hrefBase = href.replace(/\.html$/, "").replace(/\/$/, "") || "/";
    if (hrefBase === currentBase) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });

  // ===== Parallax on hero illustration (skip if reduced motion) =====
  const heroVisual = document.querySelector(".hero-visual img");
  if (heroVisual && !reduceMotion) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            if (scrollY < 800) {
              heroVisual.style.transform = `translateY(${scrollY * 0.08}px)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ===== Navbar shadow on scroll =====
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    let lastScroll = -1;
    const updateNavbar = () => {
      const y = window.scrollY;
      if (y === lastScroll) return;
      lastScroll = y;
      if (y > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();
  }

  // ===== Counter animation for podcast stats =====
  const counters = document.querySelectorAll(".podcast-stat .number");
  if (counters.length && !reduceMotion) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const text = el.textContent;
            const match = text.match(/(\d+)/);
            if (match) {
              const target = parseInt(match[1]);
              const suffix = text.replace(match[1], "");
              let current = 0;
              const increment = Math.ceil(target / 50);
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                el.textContent = current + suffix;
              }, 30);
            }
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObserver.observe(c));
  }
});
