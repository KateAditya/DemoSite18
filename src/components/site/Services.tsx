import { SectionLabel } from "./SectionLabel";
import { Hammer, Layers, Scissors, Flame, Sparkles, Cog, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Hammer, title: "Structural Fabrication", desc: "Heavy structural steel for warehouses, plants and industrial buildings — engineered to AISC standards." },
  { icon: Layers, title: "Sheet Metal Fabrication", desc: "Precision forming, bending and stamping for enclosures, panels and ducting systems." },
  { icon: Scissors, title: "CNC Plasma & Laser Cutting", desc: "Sub-millimeter accuracy across mild steel, stainless and aluminum up to 50mm thickness." },
  { icon: Flame, title: "Industrial Welding", desc: "Certified MIG, TIG and arc welding for pressure vessels, pipework and load-bearing assemblies." },
  { icon: Sparkles, title: "Stainless Steel Works", desc: "Sanitary-grade fabrication for food, pharma and chemical processing environments." },
  { icon: Cog, title: "Custom Machinery", desc: "Bespoke industrial machinery designed, fabricated and commissioned in-house." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 texture-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16">
          <div className="flex-1">
            <SectionLabel number="01" label="Capabilities" />
            <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1] max-w-2xl">
              Full-spectrum <span className="text-ember">fabrication</span>, under one roof.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Six core disciplines, 80,000 sq.ft of workshop floor, and an engineering
            team that turns blueprints into bolted-down reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card p-8 hover:bg-secondary transition-colors overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              <div className="flex items-start justify-between mb-8">
                <div className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
                  0{i + 1}
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-ember group-hover:rotate-45 transition-all duration-500"
                />
              </div>
              <s.icon size={36} className="text-ember mb-6" strokeWidth={1.4} />
              <h3 className="text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
