import { projects } from "../Data/projects";

export default function Work() {
  return (
    <section id="work" className="p-12">
      {/* Label */}
      <p className="flex items-center gap-2 px-4 pt-6 pb-2 mb-3 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e] md:px-8">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
        Selected work
      </p>
      <div className="rounded-[2rem] bg-white px-6 py-12 md:px-12 md:py-16">



        {/* Heading + count */}
        <div className="mt-6 flex items-end justify-between gap-6">
          <h2 className="text-4xl font-light tracking-tighter text-ink md:text-6xl">
            Made to <span className="text-[#9b8878]">mean something.</span>
          </h2>
          <p className="hidden border-b border-[#d9c4b3] pb-2 text-xs text-[#6f6459] md:block">
            {projects.length} projects
          </p>
        </div>

        {/* Grid: all cards in a row share the same height */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.link}
              className="group flex h-full flex-col rounded-3xl border border-[#e8d9c8] bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#c4621f] hover:bg-[#fffaf3] hover:shadow-[0_12px_30px_-12px_rgba(196,98,31,0.35)]"
            >
              {/* Top row: number + arrow */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-[#8a7b6e]">
                  {String(i + 1).padStart(2, "0")} /
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8d9c8] text-sm text-[#c4621f] transition duration-500 group-hover:rotate-45 group-hover:border-[#c4621f] group-hover:bg-[#c4621f] group-hover:text-white">
                  ↗
                </span>
              </div>

              {/* Type */}
              <p className="mt-4 text-[10px] uppercase tracking-widest text-[#8a7b6e]">
                {project.type}
              </p>

              {/* Name: reserves space for 2 lines so descriptions align */}
              <h3 className="mt-2 text-2xl font-light leading-[1.1] tracking-tighter text-ink md:min-h-[4.4rem] md:text-3xl">
                {project.name}
                <span className="text-[#c4621f]">.</span>
              </h3>

              {/* Description */}
              <p className="mt-3 line-clamp-4 text-xs leading-relaxed text-[#6f6459]">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}