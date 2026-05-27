import { SectionLabel } from "./SectionLabel";
import { Factory, Warehouse, Fuel, FlaskConical, Train, Building2, Ship, Wheat } from "lucide-react";

const industries = [
  { icon: Factory, name: "Heavy Manufacturing", note: "Plant frames, mezzanines, conveyors" },
  { icon: Warehouse, name: "Logistics & Warehousing", note: "Racking towers, loading bays" },
  { icon: Fuel, name: "Oil, Gas & Energy", note: "Pressure vessels, pipe spools" },
  { icon: FlaskConical, name: "Chemical & Pharma", note: "316L tanks, sanitary skids" },
  { icon: Train, name: "Rail & Infrastructure", note: "Bridges, gantries, platforms" },
  { icon: Building2, name: "Commercial Construction", note: "Structural frames, façades" },
  { icon: Ship, name: "Marine & Offshore", note: "Modules, davits, hull repairs" },
  { icon: Wheat, name: "Food & Beverage", note: "Brewery vessels, hygienic lines" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-14">
          <div className="flex-1">
            <SectionLabel number="05" label="Industries Served" />
            <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1] max-w-3xl">
              Built for the <span className="text-ember">heavy</span> end of industry.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            From sanitary stainless lines to 5,000-tonne structural frames — we
            engineer to the standards each sector demands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
          {industries.map((i) => (
            <div
              key={i.name}
              className="group relative bg-card p-8 hover:bg-secondary transition-colors overflow-hidden"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-ember scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <i.icon size={28} className="text-ember mb-6" strokeWidth={1.3} />
              <h3 className="text-base mb-2">{i.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{i.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
