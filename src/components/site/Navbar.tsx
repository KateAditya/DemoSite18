import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-md px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-deep" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 grid place-items-center rounded-sm bg-ember overflow-hidden">
              <span className="font-display text-primary-foreground text-lg leading-none">S</span>
              <span className="absolute inset-0 texture-diag opacity-40" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm tracking-[0.2em]">STEELCRAFT</div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-[0.3em]">
                FABRICATION · EST 1998
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-px h-px bg-ember scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="bg-ember text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wide uppercase rounded-sm hover:translate-y-[-1px] transition-transform shadow-glow"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden glass-strong mt-2 rounded-md p-4 reveal">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-border/40 text-sm font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 bg-ember text-primary-foreground text-center py-3 text-sm font-semibold uppercase tracking-wide rounded-sm"
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
