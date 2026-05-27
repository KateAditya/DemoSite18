import { SectionLabel } from "./SectionLabel";
import aboutImg from "@/assets/about-team.jpg";
import steelImg from "@/assets/structural-steel.jpg";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
            <img
              src={aboutImg}
              alt="Industrial engineer reviewing fabrication blueprints"
              width={1280}
              height={1600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="hidden md:block absolute -right-6 -bottom-6 w-56 h-72 overflow-hidden rounded-sm border-4 border-background shadow-deep">
            <img
              src={steelImg}
              alt="Structural steel warehouse"
              width={640}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -left-4 top-8 glass-strong px-5 py-4 rounded-sm">
            <div className="font-display text-3xl text-ember">27</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">
              Years building
            </div>
          </div>
        </div>

        <div>
          <SectionLabel number="02" label="The Company" />
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] mb-6">
            Built by engineers.<br />
            <span className="text-ember">Trusted by industry.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            Since 1998, SteelCraft Fabrication has delivered structural and precision
            metalwork for some of the largest industrial developments across four
            continents — from cement plants in Oman to logistics hubs in Rotterdam.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Our 240-strong team of welders, CNC operators and structural engineers
            operates under a single quality-managed system, with every weld traceable
            and every project signed-off by a chartered engineer.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Chartered structural engineers in-house",
              "AWS-certified welders, every shift",
              "Full material traceability with mill certs",
              "On-site project management included",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-ember mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{p}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-px bg-border/50">
            {[
              ["240+", "Engineers"],
              ["80K", "Sq.ft floor"],
              ["99.6%", "On-time"],
            ].map(([k, v]) => (
              <div key={v} className="bg-background/80 px-5 py-5">
                <div className="font-display text-2xl">{k}</div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
