const logos = [
  "ARCELOR", "VULCAN STEEL", "NORDCON", "TATA INDUSTRIES", "EVRAZ",
  "BHP MINING", "SIEMENS", "HITACHI", "BECHTEL", "FLUOR",
];
const badges = ["ISO 9001:2015", "AWS D1.1", "ASME U-STAMP", "OHSAS 18001", "CE EN 1090"];

export function TrustedBy() {
  return (
    <section className="relative border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground shrink-0">
            Trusted by <span className="text-ember">Industry Leaders</span>
          </div>
          <div className="flex-1 overflow-hidden mask-fade">
            <div className="flex marquee gap-16 whitespace-nowrap">
              {[...logos, ...logos].map((l, i) => (
                <span
                  key={i}
                  className="font-display text-xl text-muted-foreground/70 hover:text-foreground transition-colors tracking-wider"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-wrap gap-3 justify-center lg:justify-start">
          {badges.map((b) => (
            <span
              key={b}
              className="glass px-4 py-2 text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground"
            >
              ✓ {b}
            </span>
          ))}
        </div>
      </div>
      <style>{`.mask-fade{mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}`}</style>
    </section>
  );
}
