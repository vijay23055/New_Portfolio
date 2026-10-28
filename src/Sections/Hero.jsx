import { links } from "../Data/links";
import { Link } from "react-router-dom";
import vijay from "../assets/vijay-fulll.png";

const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Hero() {
  return (
    <section id="overview" className="p-12">
      {/* ================= GRADIENT CARD ================= */}
      <div
        className="relative h-[calc(100vh-2rem)] min-h-[680px] overflow-hidden rounded-[2rem]"
        style={{
          background:
            "linear-gradient(160deg, #b23a00 0%, #e86a00 35%, #f7a000 65%, #ffd000 90%, #ffe93a 100%)",
        }}
      >
        {/* Texture: swooping shapes */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1600 800"
          preserveAspectRatio="none"
        >
          <path d="M0 220 C 260 140, 470 330, 540 800 L0 800 Z" fill="#ffd000" fillOpacity="0.2" />
          <path d="M380 0 C 520 160, 700 120, 820 360 C 900 520, 760 700, 700 800 L1000 800 L1000 0 Z" fill="#ff7a00" fillOpacity="0.18" />
          <path d="M1600 0 L1600 420 C 1450 300, 1250 200, 1150 0 Z" fill="#7a1c00" fillOpacity="0.35" />
        </svg>

        {/* Texture: glow + grain */}
        <div className="pointer-events-none absolute -left-20 top-1/3 h-[500px] w-[500px] rounded-full bg-yellow-300/30 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{ backgroundImage: grain }}
        />

        {/* WHITE CARD (right side) */}
        <div className="absolute inset-y-4 left-[54%] right-4 z-0 hidden rounded-[1.6rem] bg-white md:block" />

        {/* HERO NAV: logo (on gradient) */}
        <a
          href="#overview"
          className="absolute left-8 top-8 z-20 hidden items-center gap-2 md:left-12 md:flex"
        >
          <span className="text-4xl leading-none text-white">&lt;/&gt;</span>
          <span className="text-[19px] font-semibold uppercase leading-tight tracking-wide text-white">
            Vijay E 
          </span>
        </a>

        {/* HERO NAV: links (on white card) */}
        <nav className="absolute right-10 top-9 z-20 hidden items-center gap-8 text-xs text-black/70 md:flex">
  {links.map((link, i) => (
    <Link
      key={link.id}
      to={link.to ?? `/#${link.id}`}
      className="relative whitespace-nowrap transition-colors hover:text-black"
    >
      {link.label}
      {i === 0 && (
        <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
      )}
    </Link>
  ))}
  <Link
    to="/connect"
    className="whitespace-nowrap border-b border-black/20 pb-0.5 text-black transition-colors hover:border-accent hover:text-accent"
  >
    Let's talk ↗
  </Link>
</nav>

        {/* LEFT: pill, name, about (behind photo) */}
        <div className="absolute left-8 top-[55%] z-0 -translate-y-1/2 md:left-16">
          <span className="inline-block rounded-full border border-white/60 px-3 py-1 text-lg font-medium text-white">
            Software Developer
          </span>
          <h1 className="mt-6 text-7xl font-medium uppercase leading-[0.85] tracking-tighter text-white md:text-8xl xl:text-9xl">
            Vijay E
          </h1>
          <p className="mt-6 max-w-xs text-xl text-white/80">
            I design and build fast, clean web products.
          </p>
        </div>

        {/* PHOTO: overlaps the white card edge */}
        <img
          src={vijay}
          alt="Vijay E"
          className="absolute bottom-0 left-[46%] z-10 h-[88%] -translate-x-1/2 object-contain"
        />

        {/* RIGHT: tagline inside the white card */}
        <div className="absolute right-12 top-[55%] z-20 hidden w-[30%] -translate-y-1/2 md:block">
          <span className="inline-block rounded-full border border-black/40 px-2 py-0.5 text-[9px] uppercase tracking-wide text-black/70">
            Who I am
          </span>
          <p className="mt-5 text-4xl font-medium leading-[1.1] tracking-tighter text-ink">
            A developer’s mind.
            <br />
            A designer’s eye.
            <br />
            <span className="text-[#a67c68]">A passion for pixels.</span>
            <br />
            Always building.
          </p>
          <p className="mt-8 text-xs leading-relaxed text-black/50">
            I imagine it.
            <br />
            I design it.
            <br />
            I bring it to life.
            <br />
            I turn ideas into interfaces people love to use.
          </p>
        </div>

        {/* BOTTOM: View my work card */}
        <Link
  to="/work"
  className="absolute bottom-6 left-[46%] z-20 flex -translate-x-1/2 items-center gap-6 rounded-2xl bg-white px-6 py-4 shadow-lg transition hover:scale-105"
>
  <span className="text-sm font-medium text-ink">View my work</span>
  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 text-xs">
    ↗
  </span>
</Link>
      </div>
      {/* ================= END GRADIENT CARD ================= */}

      {/* ================= INTRO STRIP (outside the card) ================= */}
      <div className="flex flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-16 md:py-24">
        {/* LEFT: icon + heading */}
        <div className="flex items-start gap-5 md:gap-7">
          <svg
            viewBox="0 0 100 100"
            className="mt-1 h-14 w-14 shrink-0 text-[#c4621f] md:mt-2 md:h-[4.5rem] md:w-[4.5rem]"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            aria-hidden="true"
          >
            <line x1="50" y1="4" x2="50" y2="96" />
            <line x1="4" y1="50" x2="96" y2="50" />
            <line x1="17" y1="17" x2="83" y2="83" />
            <line x1="83" y1="17" x2="17" y2="83" />
          </svg>

          <h2 className="text-3xl font-medium leading-[1.1] tracking-tighter text-ink md:text-5xl">
          Frontend Developer · 4+ Years of Experience
            <br />
            <span className="text-[#9b8878] text-4xl">I build modern, responsive, and scalable web interfaces that
            combine thoughtful design with clean, maintainable code.</span>
          </h2>
        </div>

        {/* RIGHT: role + description */}
        {/* <div className="max-w-sm md:max-w-xs">
          <p className="text-xs font-medium uppercase tracking-wide text-ink">
          A developer’s mind. A designer’s eye.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-[#8a7b6e]">
            
            A developer’s mind. A designer’s eye.
          </p>
        </div> */}
      </div>
    </section>
  );
}