import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [sent, setSent] = useState(false);
  return (
    <footer id="contact" className="relative pt-24 pb-10 border-t border-border/60 bg-card/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 mb-20">
          {/* Inquiry form */}
          <div>
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-ember mb-4">
              Project Inquiry
            </div>
            <h3 className="text-[clamp(1.75rem,4vw,3rem)] leading-[1] mb-8">
              Start your fabrication brief.
            </h3>
            {sent ? (
              <div className="glass-strong p-8 rounded-sm">
                <div className="font-display text-xl text-ember mb-2">Thanks — we'll be in touch.</div>
                <p className="text-sm text-muted-foreground">
                  An engineer will respond within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Full name"
                    className="bg-background border border-border/60 px-4 py-3.5 rounded-sm text-sm focus:outline-none focus:border-ember w-full"
                  />
                  <input
                    required
                    placeholder="Company"
                    className="bg-background border border-border/60 px-4 py-3.5 rounded-sm text-sm focus:outline-none focus:border-ember w-full"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    className="bg-background border border-border/60 px-4 py-3.5 rounded-sm text-sm focus:outline-none focus:border-ember w-full"
                  />
                  <select
                    className="bg-background border border-border/60 px-4 py-3.5 rounded-sm text-sm focus:outline-none focus:border-ember w-full"
                    defaultValue=""
                  >
                    <option value="" disabled>Project type</option>
                    <option>Structural fabrication</option>
                    <option>Sheet metal</option>
                    <option>Custom machinery</option>
                    <option>Stainless / sanitary</option>
                    <option>Other</option>
                  </select>
                </div>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, tonnage and target timeline…"
                  className="bg-background border border-border/60 px-4 py-3.5 rounded-sm text-sm focus:outline-none focus:border-ember w-full resize-none"
                />
                <button className="group inline-flex items-center gap-3 bg-ember text-primary-foreground px-7 py-4 font-semibold uppercase tracking-wider text-sm rounded-sm shadow-glow">
                  Send Inquiry
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Contact + links */}
          <div className="space-y-10">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
                Headquarters
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-ember mt-0.5" />
                  <div className="text-sm">
                    240 Forge Lane, Industrial Zone 4<br />
                    Pittsburgh, PA 15201, USA
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-ember" />
                  <a href="tel:+15550102240" className="text-sm hover:text-ember">+1 (555) 010-2240</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-ember" />
                  <a href="mailto:tenders@steelcraft.co" className="text-sm hover:text-ember">
                    tenders@steelcraft.co
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  Capabilities
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#services" className="hover:text-ember">Structural</a></li>
                  <li><a href="#services" className="hover:text-ember">Sheet metal</a></li>
                  <li><a href="#services" className="hover:text-ember">CNC cutting</a></li>
                  <li><a href="#services" className="hover:text-ember">Welding</a></li>
                </ul>
              </div>
              <div>
                <div className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  Company
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#about" className="hover:text-ember">About</a></li>
                  <li><a href="#projects" className="hover:text-ember">Projects</a></li>
                  <li><a href="#process" className="hover:text-ember">Process</a></li>
                  <li><a href="#contact" className="hover:text-ember">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-ember grid place-items-center font-display rounded-sm">S</div>
            <div className="font-display tracking-[0.2em] text-sm">STEELCRAFT FABRICATION</div>
          </div>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} SteelCraft Inc. · All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
