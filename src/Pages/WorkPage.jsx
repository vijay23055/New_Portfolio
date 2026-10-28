import { Link } from "react-router-dom";
import Reveal from "../compoents/Reveal";
import ProjectDetail from "../compoents/ProjectDetail";
import { workDetails } from "../Data/workDetails";
import Contact from "../Sections/Contact";

export default function WorkPage() {
    return (
    <>
        <div className="pb-28 pt-36">
            {/* Reading column: change max-w to make it wider or narrower */}
            <div className="mx-auto w-full max-w-[44rem] px-6">
                {/* Page header */}
                <Reveal className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
                    Work
                </Reveal>

                <Reveal
                    as="h1"
                    delay={100}
                    className="mt-5 text-6xl font-light leading-[1] tracking-tighter text-ink md:text-8xl"
                >
                    Selected <span className="text-[#9b8878]">work.</span>
                </Reveal>

                <Reveal
                    as="p"
                    delay={220}
                    className="mt-6 text-[17px] leading-8 text-[#5f5448]"
                >
                    A closer look at what I built, the problems behind each project, and
                    what changed because of it.
                </Reveal>

                {/* Index */}
                <Reveal delay={340} className="mt-10 border-t border-[#e0d3c3]">
                    {workDetails.map((p, i) => (
                        <a
                            key={p.slug}
                            href={`#${p.slug}`}
                            className="group flex items-center justify-between border-b border-[#e0d3c3] py-4 transition-colors hover:text-[#c4621f]"
                        >
                            <span className="flex items-baseline gap-4">
                                <span className="font-mono text-xs text-[#8a7b6e]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-lg tracking-tight text-ink group-hover:text-[#c4621f]">
                                    {p.title}
                                </span>
                            </span>
                            <span className="text-sm text-[#c4621f] transition-transform duration-300 group-hover:translate-y-0.5">
                                ↓
                            </span>
                        </a>
                    ))}
                </Reveal>

                {/* Projects */}
                <div className="mt-20">
                    {workDetails.map((project, i) => (
                        <ProjectDetail
                            key={project.slug}
                            project={project}
                            index={i}
                            total={workDetails.length} />
                    ))}
                </div>

                {/* Closing line */}
                
            </div>
        </div>
            <div className="mt-24  border-t border-[#e0d3c3] pt-16">
                <Reveal
                    as="h2"
                    className="text-5xl font-light leading-[1.05] tracking-tighter text-ink md:text-6xl ml-50"
                >
                    Let’s build something worth{" "}
                    <span className="font-serif italic text-[#c4621f]">
                        remembering.
                    </span>
                </Reveal>
            </div>
            <Reveal delay={150} className="mt-8">
                <Contact />
            </Reveal>
    </>

    );
}