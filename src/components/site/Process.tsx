import { SectionLabel } from "./SectionLabel";

const steps = [
  { n: "01", t: "Design", d: "Structural drawings, FEA simulation and material selection by chartered engineers." },
  { n: "02", t: "Cutting", d: "CNC plasma, fiber laser and waterjet cutting on certified mill-test plate." },
  { n: "03", t: "Welding", d: "AWS D1.1 certified welders, with full NDT inspection on every joint." },
  { n: "04", t: "Finishing", d: "Shot-blasting, hot-dip galvanizing or industrial-grade powder coating." },
  { n: "05", t: "Delivery", d: "Logistics, on-site assembly and commissioning, anywhere in the world." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 texture-diag opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 max-w-2xl">
          <SectionLabel number="05" label="The Process" />
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1]">
            From sketch to <span className="text-ember">shipment</span> — five disciplined steps.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-[42px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border/50">
            {steps.map((s) => (
              <div key={s.n} className="bg-background p-6 relative group hover:bg-card transition-colors">
                <div className="relative z-10 mb-6">
                  <div className="h-[84px] flex items-end">
                    <div className="font-display text-5xl text-ember">{s.n}</div>
                  </div>
                  <div className="mt-3 h-2 w-12 bg-ember" />
                </div>
                <h3 className="text-xl mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
