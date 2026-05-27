import { SectionLabel } from "./SectionLabel";

const stats = [
  { k: "1,400+", v: "Projects Delivered", d: "Across 48 countries since 1998" },
  { k: "92,000", v: "Tonnes of Steel", d: "Cut, welded and shipped to date" },
  { k: "ISO 9001", v: "Quality Certified", d: "Plus AWS D1.1 & EN 1090 EXC4" },
  { k: "99.6%", v: "On-Time Delivery", d: "Tracked across 5 years of jobs" },
];

export function Stats() {
  return (
    <section className="relative py-24 sm:py-32 bg-card/40 border-y border-border/60">
      <div className="absolute inset-0 texture-diag opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <SectionLabel number="04" label="By The Numbers" />
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.05]">
            Three decades of <span className="text-ember">measurable</span> output.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
          {stats.map((s, i) => (
            <div key={s.v} className="bg-background p-8 group hover:bg-secondary/60 transition-colors">
              <div className="font-mono text-[10px] tracking-[0.3em] text-ember mb-6">
                / 0{i + 1}
              </div>
              <div className="font-display text-5xl md:text-6xl leading-none mb-4 group-hover:text-ember transition-colors">
                {s.k}
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-2">{s.v}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
