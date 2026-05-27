import { SectionLabel } from "./SectionLabel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What project sizes do you take on?",
    a: "We routinely handle contracts from 5 tonnes to 6,000+ tonnes of structural steel, plus precision sheet-metal runs from prototype quantities up to 10,000+ units. There is no minimum order on stainless or CNC work.",
  },
  {
    q: "How fast can you quote and turn around fabrication?",
    a: "Most quotes are returned within 48 hours of receiving drawings. Standard fabrication lead times run 3–8 weeks depending on tonnage, finishing and certification requirements. Emergency turnaround is available — we have run 72-hour jobs for breakdown recovery.",
  },
  {
    q: "Do you ship and install internationally?",
    a: "Yes. We have delivered to 48 countries, with in-house logistics handling sea, road and air freight. Installation crews are dispatched globally and we partner with local contractors where on-the-ground licensing is required.",
  },
  {
    q: "What materials and finishes do you work in?",
    a: "Carbon steel (S235–S690), stainless (304, 316, 316L, duplex), aluminum (5xxx / 6xxx series), Corten and specialty alloys. Finishing options include shot-blasting, hot-dip galvanizing, intumescent coatings and powder coat to RAL spec.",
  },
  {
    q: "Can you work to our drawings, or do you design from a brief?",
    a: "Both. We accept fully detailed shop drawings, IFC/DWG models, or work from a performance brief with our chartered structural engineers producing the design, calculations and stamped approvals in-house.",
  },
  {
    q: "What quality documentation do you provide?",
    a: "Every project ships with mill certificates, weld procedure specifications (WPS), welder qualifications, NDT reports (UT/MT/PT/RT as required), dimensional inspection reports and a signed Declaration of Performance for CE/UKCA-marked steelwork.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-card/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <SectionLabel number="08" label="Common Questions" />
          <h2 className="text-[clamp(2rem,5vw,3.75rem)] leading-[1] max-w-2xl mx-auto">
            Answers from the <span className="text-ember">workshop floor.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-border/60 group"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline">
                <div className="flex items-start gap-6 pr-4">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-ember pt-1.5">
                    0{i + 1}
                  </span>
                  <span className="font-display text-lg sm:text-xl uppercase tracking-tight group-hover:text-ember transition-colors">
                    {f.q}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[3.25rem] pr-8 text-[15px]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
