import { SectionLabel } from "./SectionLabel";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "SteelCraft delivered our 42,000 m² distribution centre two weeks ahead of contract — every weld passed third-party NDT first time.",
    name: "Marcus Hendriks",
    role: "Director of Construction, NordLogistics BV",
  },
  {
    quote:
      "We've placed six consecutive contracts with SteelCraft. Their structural engineering team is, quite simply, the best we work with.",
    name: "Aisha Al-Mansoori",
    role: "Head of Plant Engineering, Gulf Cement Co.",
  },
  {
    quote:
      "Custom machinery delivered, installed and commissioned in 11 weeks. Output up 38% in the first quarter.",
    name: "Jonas Weber",
    role: "Operations Director, Bayern Industrieguss",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 max-w-2xl">
          <SectionLabel number="06" label="Client Voice" />
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[1]">
            What the people who <span className="text-ember">specify steel</span> say.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <figure
              key={i}
              className="relative glass-strong p-8 rounded-sm flex flex-col"
            >
              <Quote size={32} className="text-ember mb-6" />
              <blockquote className="text-foreground leading-relaxed flex-1 text-[15px]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border/40">
                <div className="font-display tracking-wide text-sm">{t.name}</div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
