export default function StackCard({ index, title, items, note }) {
    return (
      <article className="flex flex-col rounded-2xl bg-[#fff8e8]/95 p-5 shadow-sm">
        {/* Number */}
        <p className="font-mono text-[10px] text-[#8a7b6e]">
          {String(index).padStart(2, "0")} /
        </p>
  
        {/* Title */}
        <h3 className="mt-4 text-xl font-light leading-tight tracking-tighter text-[#2d2418]">
          {title}
        </h3>
  
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#f1e3c6] px-2.5 py-1 text-[11px] text-[#6f5a3f]"
            >
              {item}
            </span>
          ))}
        </div>
  
        {/* Optional note */}
        {note && (
          <p className="mt-4 text-xs leading-relaxed text-[#8a7b6e]">{note}</p>
        )}
      </article>
    );
  }