import cncImg from "@/assets/cnc-cutting.jpg";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-sm">
          <img
            src={cncImg}
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 texture-grid opacity-50" />
          <div className="relative p-10 sm:p-16 lg:p-24 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-ember mb-6">
                Tender · Quote · Build
              </div>
              <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[0.95]">
                Need industrial
                <br />
                fabrication
                <br />
                <span className="text-ember">solutions?</span>
              </h2>
              <p className="mt-8 max-w-lg text-muted-foreground text-lg">
                Send us your drawings or tender pack. You'll have a sealed quote and
                indicative lead time within 48 hours.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-between bg-ember text-primary-foreground px-7 py-5 font-semibold uppercase tracking-wider text-sm rounded-sm shadow-glow"
              >
                Request a Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+10000000000"
                className="group inline-flex items-center justify-between glass-strong px-7 py-5 font-semibold uppercase tracking-wider text-sm rounded-sm"
              >
                <span className="flex items-center gap-3">
                  <Phone size={16} className="text-ember" /> +1 (555) 010-2240
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">24 / 7</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
