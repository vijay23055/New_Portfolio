import { experience } from "../Data/Experience";

export default function Profile() {
  return (
    <section id="profile" className="p-12">
      {/* Section heading */}
      <p className="flex items-center gap-2 px-4 pt-6 pb-2 mb-3 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e] md:px-8">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
        Profile
      </p>
      {/* <h2 className="px-4 pb-6 pt-3 text-xl font-light tracking-tighter text-ink md:px-8 md:text-3xl">
        Experience<span className="text-[#c4621f]">.</span>
      </h2> */}

      {/* Experience card */}
      <div className="rounded-[2rem] border border-black/5 bg-white px-6 md:px-12">
        {experience.map((job, i) => (
          <article
            key={job.company + job.period}
            className={`grid gap-6 py-10 md:grid-cols-[240px_1fr] md:gap-12 ${
              i !== 0 ? "border-t border-black/5" : ""
            }`}
          >
            {/* Left: period + company */}
            <div>
              <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e]">
                {i === 0 && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
                )}
                {job.period}
              </p>
              <h3 className="mt-3 text-2xl font-light tracking-tighter text-ink">
                {job.company}
                <span className="text-[#c4621f]">.</span>
              </h3>
            </div>

            {/* Right: role, points, tech */}
            <div>
              <p className="text-sm font-medium text-ink">{job.role}</p>

              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-[#6f6459]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c4621f]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 px-3 py-1 text-[11px] text-[#6f6459]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}