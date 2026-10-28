import { Link } from "react-router-dom";

export default function Contact() {
    return (
      <section id="contact" className="p-12">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 py-12 md:px-12 md:py-16"
          style={{
            background:
              "linear-gradient(to top right, #ffdf6e 0%, #f0a53a 45%, #b8541c 100%)",
          }}
        >
          {/* Soft decorative circle */}
          <div className="pointer-events-none absolute -top-40 left-[28%] h-[900px] w-[900px] rounded-full bg-white/10" />
  
          <div className="relative">
            {/* Label */}
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Let's connect
            </p>
  
            {/* Heading + arrow button */}
            <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <h2 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-tighter text-white md:text-7xl">
                The next great opportunity could start with a{" "}
                <span className="font-serif italic text-[#6b3a1a]">hello.</span>
              </h2>
  
              {/* Arrow button + label */}
              <div className="flex flex-col items-center gap-3 md:mr-6">
  <Link
    to="/connect"
    aria-label="Let's connect"
    className="flex h-30 w-30 items-center justify-center rounded-full bg-[#fff8ec] text-[40px] text-[#8a4b1f] shadow-lg transition hover:scale-110 md:h-20 md:w-20"
  >
    ↗
  </Link>
  <span className="text-sm font-medium text-white">
    Let's connect
  </span>
</div>
            </div>
  
            {/* Divider */}
            <div className="mt-12 border-t border-[#8a4b1f]/30 pt-6">
              <p className="max-w-2xl text-xs leading-relaxed text-[#5a3410]">
                I'm always open to connecting with great teams, exploring new
                opportunities, and building meaningful products. Let's talk about
                what we could create together.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }