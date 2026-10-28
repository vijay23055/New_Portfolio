import { Link } from "react-router-dom";
import Reveal from "../compoents/Reveal";
import { about } from "../Data/about";

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32">
      {/* ================= HERO ================= */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:gap-16">
        {/* Left: intro */}
        <div>
          <Reveal className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
            The person behind the pixels
          </Reveal>

          <Reveal
            as="h1"
            delay={100}
            className="mt-8 text-5xl font-light leading-[1.02] tracking-tighter text-ink md:text-7xl"
          >
            I’m Vijay.
            <br />
            From a thought in my head
            <br />
            <span className="text-[#c4621f]">to a UI on your screen.</span>
          </Reveal>

          <Reveal
            as="p"
            delay={260}
            className="mt-8 text-[17px] leading-8 text-[#6f6459]"
          >
            A developer’s mind. A designer’s eye.
            <br />
            A builder’s curiosity.
          </Reveal>
        </div>

        {/* Right: bold typography card + CV */}
        <Reveal delay={200}>
          <div className="rounded-[2rem] border border-[#e8d9c8] bg-white p-3">
            {/* Typography panel */}
            <div
              className="relative flex flex-col justify-center overflow-hidden rounded-[1.5rem] px-8 py-14 md:px-10 md:py-16"
              style={{
                background:
                  "linear-gradient(160deg, #b23a00 0%, #e86a00 38%, #f7a000 72%, #ffd000 100%)",
              }}
            >
              <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
              <p className="relative text-6xl font-bold leading-[1.15] tracking-tight text-white md:text-7xl">
                Think.
                <br />
                Create.
                <br />
                <span className="text-[#4a1d05]">Repeat.</span>
              </p>
            </div>

            {/* Footer of card: name + CV button */}
            <div className="flex items-center justify-between gap-4 px-4 pb-3 pt-5">
              <div>
                <p className="text-base text-ink">{about.name}</p>
                <p className="mt-0.5 text-[11px] text-[#8a7b6e]">{about.role}</p>
              </div>

              <a
  href={about.cvLink}
  download="Vijay_E_CV.pdf"
  className="group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-[#c4621f]"
>
                Download CV
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= WHO I AM ================= */}
      <section className="mx-auto mt-24 max-w-6xl px-6 md:mt-32">
        <div className="grid gap-10 border-y border-[#e0d3c3] py-16 md:grid-cols-[1fr_2.2fr] md:gap-16 md:py-20">
          {/* Label */}
          <Reveal className="flex items-start gap-2 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e] md:pt-3">
            <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
            01 / Who I am
          </Reveal>

          {/* Content */}
          <div>
            <Reveal
              as="h2"
              className="text-4xl font-light leading-[1.08] tracking-tighter text-ink md:text-6xl"
            >
              {about.whoTitle[0]}
              <br />
              <span className="text-[#c4621f]">{about.whoTitle[1]}</span>
            </Reveal>

            <Reveal
              as="p"
              delay={120}
              className="mt-8 text-[17px] leading-8 text-[#6f6459]"
            >
              {about.specialised}
            </Reveal>

            {/* Steps */}
            <ul className="mt-10 border-t border-[#e0d3c3]">
              {about.steps.map((step, i) => (
                <Reveal
                  as="li"
                  key={step}
                  delay={i * 120}
                  className="flex items-baseline gap-6 border-b border-[#e0d3c3] py-5"
                >
                  <span className="font-mono text-xs text-[#c4621f]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl font-light tracking-tighter text-ink md:text-3xl">
                    {step}
                    <span className="text-[#c4621f]">.</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CLOSING LINKS ================= */}
      <section className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-4 px-6">
        <Reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-6 border-b border-[#d9c4b3] pb-3 text-sm text-ink transition-colors hover:border-[#c4621f] hover:text-[#c4621f]"
          >
            See my work
            <span>↗</span>
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <Link
            to="/connect"
            className="inline-flex items-center gap-6 border-b border-[#d9c4b3] pb-3 text-sm text-ink transition-colors hover:border-[#c4621f] hover:text-[#c4621f]"
          >
            Let's connect
            <span>↗</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}