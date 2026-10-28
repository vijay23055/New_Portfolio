import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../Data/links";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Show the pill after scrolling past the hero nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section in view (home page only)
  useEffect(() => {
    if (!isHome) return;
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const current = pathname.startsWith("/work")
  ? "work"
  : pathname.startsWith("/about")
  ? "about"
  : isHome
  ? active
  : "";
  const showPill = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500 ${
        showPill
          ? "translate-y-0 opacity-100"
          : "md:pointer-events-none md:-translate-y-24 md:opacity-0"
      }`}
    >
      <nav className="mx-auto max-w-6xl rounded-2xl border border-black/5 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-md md:px-6">
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Left */}
          <Link
            to="/"
            className="flex w-fit items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <span className="text-2xl leading-none text-accent">&lt;/&gt;</span>
            <span className="text-[11px] font-semibold uppercase leading-tight tracking-wide text-ink">
              Vijay E <br /> Developer
            </span>
          </Link>

          {/* Center */}
          <ul className="hidden items-center justify-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.id} className="relative">
                <Link
                   to={link.to ?? `/#${link.id}`}
                  className={`whitespace-nowrap text-sm transition-colors ${
                    current === link.id
                      ? "text-ink"
                      : "text-black/50 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
                {current === link.id && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden justify-end md:flex">
            <Link
              to="/connect"
              className="border-b border-black/20 pb-1 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Let's talk ↗
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-0.5 w-5 bg-ink transition-all ${
                  open && i === 0 ? "translate-y-2 rotate-45" : ""
                } ${open && i === 1 ? "opacity-0" : ""} ${
                  open && i === 2 ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="mt-4 flex flex-col gap-4 border-t border-black/5 pt-4 md:hidden">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                 to={link.to ?? `/#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`text-base ${
                    current === link.id ? "text-ink" : "text-black/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/connect"
                onClick={() => setOpen(false)}
                className="text-base text-accent"
              >
                Let's talk ↗
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}