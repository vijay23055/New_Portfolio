import { stack } from "../Data/Stack";
import StackCard from "../compoents/StackCard";

export default function Stack() {
  return (
    <section id="stack" className="p-12">
        <p className="flex items-center gap-2 px-4 pt-6 pb-2 mb-3 text-[10px] font-medium uppercase tracking-widest text-[#8a7b6e] md:px-8">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c4621f]" />
        Stack
      </p>
      <div
        className="rounded-[2rem] px-6 py-12 md:px-12 md:py-16"
        style={{
          background:
            "linear-gradient(to top right, #ffdc66 0%, #f0a53a 45%, #b8541c 100%)",
        }}
      >
        {/* Label */}
        

        {/* Heading + side note */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-light tracking-tighter text-[#3d2410] md:text-6xl">
            Tools. <span className="text-[#fff4dc]">In practice.</span>
          </h2>
          <p className="text-[10px] uppercase tracking-widest text-[#5a3410]/80">
            What I build with
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((group, i) => (
            <StackCard
              key={group.title}
              index={i + 1}
              title={group.title}
              items={group.items}
              note={group.note}
            />
          ))}
        </div>
      </div>
    </section>
  );
}