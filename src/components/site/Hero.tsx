import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-welding.jpg";

function Sparks() {
  const sparks = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute left-[18%] bottom-[32%] hidden md:block" aria-hidden>
      {sparks.map((_, i) => {
        const tx = (Math.random() - 0.5) * 240;
        const ty = -60 - Math.random() * 160;
        const delay = (i % 6) * 0.18 + Math.random() * 0.3;
        const dur = 1.2 + Math.random() * 1.2;
        return (
          <span
            key={i}
            className="spark"
            style={
              {
                left: `${Math.random() * 40}px`,
                top: `${Math.random() * 20}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${dur}s`,
                "--tx": `${tx}px`,
                "--ty": `${ty}px`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Welder fabricating structural steel with sparks"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 texture-grid opacity-60" />
      </div>

      <Sparks />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-40 pb-24 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <div
            className="reveal flex items-center gap-3 text-xs font-mono tracking-[0.3em] text-muted-foreground mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-px w-10 bg-ember" />
            ISO 9001 · AWS D1.1 CERTIFIED
          </div>

          <h1
            className="reveal text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] font-display"
            style={{ animationDelay: "0.2s" }}
          >
            Precision Metal
            <br />
            Fabrication
            <br />
            <span className="text-ember">Engineered</span>{" "}
            <span className="display-stroke">for Strength</span>
          </h1>

          <p
            className="reveal mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "0.35s" }}
          >
            From structural steel to custom industrial machinery — SteelCraft engineers
            mission-critical fabrication for factories, warehouses, and construction
            projects worldwide.
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-ember text-primary-foreground px-7 py-4 font-semibold uppercase tracking-wider text-sm rounded-sm shadow-glow hover:translate-y-[-2px] transition-transform"
            >
              Get Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 glass px-7 py-4 font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-white/5 transition-colors"
            >
              <span className="grid place-items-center h-7 w-7 rounded-full bg-ember pulse-ember">
                <Play size={12} className="text-primary-foreground translate-x-px" fill="currentColor" />
              </span>
              View Projects
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="reveal mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/50 max-w-3xl"
            style={{ animationDelay: "0.65s" }}
          >
            {[
              ["27", "Years"],
              ["1,400+", "Projects"],
              ["48", "Countries"],
              ["120K t", "Steel/yr"],
            ].map(([k, v]) => (
              <div key={v} className="bg-background/80 backdrop-blur px-5 py-5">
                <div className="font-display text-3xl text-foreground">{k}</div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
        <span className="h-12 w-px bg-gradient-to-b from-transparent via-ember to-transparent" />
        Scroll
      </div>
    </section>
  );
}
