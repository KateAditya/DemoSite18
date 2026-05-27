import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

export function FloatingCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed z-40 bottom-6 right-6 group inline-flex items-center gap-3 bg-ember text-primary-foreground pl-4 pr-5 py-3.5 rounded-full shadow-glow pulse-ember transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="grid place-items-center h-7 w-7 rounded-full bg-primary-foreground/15">
        <MessageSquare size={14} />
      </span>
      <span className="text-xs font-semibold uppercase tracking-wider">Free Quote</span>
    </a>
  );
}
