import Reveal from "./Reveal";

function SectionTitle({ children }) {
  return (
    <Reveal
      as="h3"
      className="mt-14 text-2xl font-light tracking-tighter text-ink md:text-3xl"
    >
      {children}
      <span className="text-[#c4621f]">.</span>
    </Reveal>
  );
}

function Paragraph({ children }) {
  return (
    <Reveal as="p" className="mt-5 text-[17px] leading-8 text-[#5f5448]">
      {children}
    </Reveal>
  );
}

export default function ProjectDetail({ project, index, total }) {
  const number = String(index + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");

  return (
    <article
      id={project.slug}
      className="scroll-mt-28 border-t border-[#e0d3c3] pb-8 pt-16 first:border-t-0 first:pt-0"
    >
      {/* Header */}
      <Reveal className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
        Project {number} / {count}
      </Reveal>

      <Reveal
        as="h2"
        delay={100}
        className="mt-5 text-5xl font-light leading-[1.02] tracking-tighter text-ink md:text-7xl"
      >
        {project.title}
        <span className="text-[#c4621f]">.</span>
      </Reveal>

      <Reveal
        as="p"
        delay={200}
        className="mt-4 text-xl tracking-tight text-[#9b8878] md:text-2xl"
      >
        {project.subtitle}
      </Reveal>

      <Reveal delay={300} className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#e0d3c3] px-3 py-1 text-[11px] text-[#6f6459]"
          >
            {tag}
          </span>
        ))}
      </Reveal>

      {/* Overview */}
      <SectionTitle>Project overview</SectionTitle>
      {project.overview.map((p) => (
        <Paragraph key={p}>{p}</Paragraph>
      ))}

      {/* Challenge */}
      <SectionTitle>The challenge</SectionTitle>
      {project.challenge.map((p) => (
        <Paragraph key={p}>{p}</Paragraph>
      ))}

      {/* Contributions */}
      <SectionTitle>Key contributions</SectionTitle>
      {project.contributions.map((c, i) => (
        <div key={c.title} className="mt-12">
          <Reveal className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-[#c4621f]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="text-xl font-medium tracking-tight text-ink">
              {c.title}
            </h4>
          </Reveal>

          {c.intro && <Paragraph>{c.intro}</Paragraph>}

          <ul className="mt-5 space-y-3">
            {c.points.map((point, j) => (
              <Reveal
                as="li"
                key={point}
                delay={Math.min(j, 5) * 70}
                className="flex gap-3 text-[17px] leading-8 text-[#5f5448]"
              >
                <span className="mt-[14px] h-1 w-1 shrink-0 rounded-full bg-[#c4621f]" />
                <span>{point}</span>
              </Reveal>
            ))}
          </ul>

          {c.example && (
            <Reveal className="mt-6 border-l-2 border-[#e0d3c3] pl-4 text-[15px] italic leading-7 text-[#7a6c5e]">
              {c.example}
            </Reveal>
          )}

          {c.note && (
            <Reveal className="mt-6 border-l-2 border-[#c4621f] pl-4 text-[15px] leading-7 text-[#6f6459]">
              {c.note}
            </Reveal>
          )}

          {c.result && (
            <Reveal className="mt-6 rounded-2xl border border-[#e0d3c3] bg-white px-5 py-4">
              <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
                Reported result
              </p>
              <p className="mt-2 text-[15px] leading-7 text-ink">{c.result}</p>
            </Reveal>
          )}
        </div>
      ))}

      {/* Outcome */}
      <SectionTitle>Product outcome</SectionTitle>
      {project.outcome.map((p) => (
        <Paragraph key={p}>{p}</Paragraph>
      ))}
    </article>
  );
}