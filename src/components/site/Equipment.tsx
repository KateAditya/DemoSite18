import { SectionLabel } from "./SectionLabel";
import cnc from "@/assets/cnc-cutting.jpg";

const specs = [
  { k: "CNC Plasma", v: "50mm", d: "Carbon steel max thickness" },
  { k: "Fiber Laser", v: "12kW", d: "Stainless / aluminum precision" },
  { k: "Press Brake", v: "640t", d: "8m forming length" },
  { k: "Overhead Crane", v: "80t", d: "Twin-girder, 36m span" },
  { k: "Bay Length", v: "120m", d: "Continuous heavy-lift bay" },
  { k: "Welding Booths", v: "32", d: "MIG / TIG / SAW certified" },
];

export function Equipment() {
  return (
    <section id="equipment" className="relative py-28 sm:py-36 bg-card/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-2 relative">
          <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
            <img
              src={cnc}
              alt="CNC plasma cutting machine in operation"
              width={1280}
              height={1600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-strong p-5 rounded-sm">
              <div className="font-mono text-[10px] tracking-[0.3em] text-ember mb-1">
                / WORKSHOP 02
              </div>
              <div className="font-display text-xl">80,000 sq.ft of fabrication floor</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <SectionLabel number="06" label="Plant & Equipment" />
          <h2 className="text-[clamp(1.8rem,4vw,3.25rem)] leading-[1.05] mb-6">
            Industrial-grade machinery,<br />
            <span className="text-ember">calibrated daily.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Every machine on our floor is documented, maintained on schedule and
            operated by a certified technician — so your tolerances hold from
            first cut to final inspection.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-border/60">
            {specs.map((s) => (
              <div key={s.k} className="bg-background p-6">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  {s.k}
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl text-ember">{s.v}</span>
                  <span className="text-xs text-muted-foreground">{s.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
