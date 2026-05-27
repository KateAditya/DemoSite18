import { SectionLabel } from "./SectionLabel";
import { ShieldCheck, Award, FileBadge, Scale } from "lucide-react";

const certs = [
  { icon: ShieldCheck, code: "ISO 9001:2015", name: "Quality Management", body: "BSI Certified" },
  { icon: Award, code: "AWS D1.1 / D1.6", name: "Structural & Stainless Welding", body: "American Welding Society" },
  { icon: FileBadge, code: "EN 1090 EXC4", name: "Execution Class 4 Steelwork", body: "CE / UKCA Marked" },
  { icon: Scale, code: "ASME Sec. IX", name: "Pressure Vessel Welders", body: "Procedure Qualified" },
];

export function Certifications() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12">
          <SectionLabel number="07" label="Certified & Compliant" />
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] max-w-3xl">
            Auditable quality. <span className="text-ember">Every weld, every batch.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c) => (
            <div
              key={c.code}
              className="glass-strong p-6 rounded-sm group hover:ring-ember transition-all"
            >
              <c.icon size={28} className="text-ember mb-6" strokeWidth={1.3} />
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
                {c.body}
              </div>
              <div className="font-display text-lg mb-1">{c.code}</div>
              <div className="text-xs text-muted-foreground">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
