import { SectionLabel } from "./SectionLabel";
import { Target, Cpu, Truck, ShieldCheck } from "lucide-react";

const items = [
  { icon: Target, title: "Precision Engineering", desc: "Tolerances down to ±0.1mm across structural and sheet work." },
  { icon: Cpu, title: "Advanced Machinery", desc: "Fleet of 6-axis CNC, fiber lasers and 400-ton press brakes." },
  { icon: Truck, title: "Fast Delivery", desc: "Standard structural runs ship in 14 days. Expedited in 5." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Every weld inspected, every plate certified, every batch traceable." },
];

export function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-card/30 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel number="04" label="Why SteelCraft" />
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1]">
            Why factory owners <span className="text-ember">come back.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative glass-strong p-8 rounded-sm overflow-hidden hover:translate-y-[-4px] transition-transform"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-ember opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
              <div className="font-display text-6xl text-ember/20 mb-2">0{i + 1}</div>
              <it.icon size={28} className="text-ember mb-5" strokeWidth={1.4} />
              <h3 className="text-lg mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
