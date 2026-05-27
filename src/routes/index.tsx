import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Stats } from "@/components/site/Stats";
import { Industries } from "@/components/site/Industries";
import { Equipment } from "@/components/site/Equipment";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Certifications } from "@/components/site/Certifications";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SteelCraft Fabrication — Precision Metal Fabrication Engineered for Strength" },
      {
        name: "description",
        content:
          "Premium structural steel, sheet metal, CNC cutting and custom machinery fabrication for industrial factories, warehouses and construction. ISO 9001 · AWS D1.1 certified.",
      },
      { property: "og:title", content: "SteelCraft Fabrication — Industrial Metal Fabrication" },
      {
        property: "og:description",
        content:
          "Mission-critical fabrication for factories, warehouses and plants. 27 years, 1,400+ projects, 48 countries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <Projects />
      <Stats />
      <Industries />
      <Equipment />
      <WhyUs />
      <Process />
      <Certifications />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Footer />
      <FloatingCta />
    </main>
  );
}
