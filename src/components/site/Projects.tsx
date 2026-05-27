import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";
import warehouse from "@/assets/project-warehouse.jpg";
import machinery from "@/assets/project-machinery.jpg";
import sheetmetal from "@/assets/project-sheetmetal.jpg";
import stainless from "@/assets/stainless-steel.jpg";
import cnc from "@/assets/cnc-cutting.jpg";
import structural from "@/assets/structural-steel.jpg";

const all = [
  { img: warehouse, title: "Logistics Hub — Rotterdam", category: "Structural", meta: "42,000 m² · 2,800 t steel", size: "wide" },
  { img: machinery, title: "Conveyor System — Hamburg", category: "Machinery", meta: "Custom build · 220 m line" },
  { img: sheetmetal, title: "Aerospace Panels — Toulouse", category: "Sheet Metal", meta: "Precision ±0.2mm" },
  { img: stainless, title: "Brewery Vessels — Munich", category: "Stainless", meta: "Sanitary 316L · 14 units", size: "tall" },
  { img: cnc, title: "Plate Cutting — Doha", category: "CNC", meta: "Plasma · 50mm carbon" },
  { img: structural, title: "Cement Plant — Muscat", category: "Structural", meta: "Heavy frame · 5,400 t" },
];

const cats = ["All", "Structural", "Machinery", "Sheet Metal", "Stainless", "CNC"];

export function Projects() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? all : all.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-12">
          <div className="flex-1">
            <SectionLabel number="03" label="Selected Work" />
            <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1] max-w-3xl">
              Steel that <span className="text-ember">stands.</span> Projects that ship.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] rounded-sm border transition-all ${
                  active === c
                    ? "bg-ember text-primary-foreground border-transparent"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((p, i) => (
            <a
              key={p.title}
              href="#contact"
              className={`group relative overflow-hidden rounded-sm bg-card aspect-[4/5] ${
                p.size === "wide" ? "lg:col-span-2 lg:aspect-[16/10]" : ""
              } ${p.size === "tall" ? "lg:row-span-2 lg:aspect-[3/5]" : ""}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <img
                src={p.img}
                alt={p.title}
                width={1280}
                height={960}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ember mb-3">
                  {p.category} · {p.meta}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl leading-tight">{p.title}</h3>
                  <span className="grid place-items-center h-10 w-10 rounded-full glass-strong shrink-0 group-hover:bg-ember group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/70">
                / 0{i + 1}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
