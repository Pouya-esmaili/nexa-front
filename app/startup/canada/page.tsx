import Hero from "@/components/canada-startup/Hero";
import Pillars from "@/components/canada-startup/Pillars";
import Orgs from "@/components/canada-startup/Orgs";
import Eligibility from "@/components/canada-startup/Eligibility";
import Financials from "@/components/canada-startup/Financials";
import Process from "@/components/canada-startup/Process";
import Projects from "@/components/canada-startup/Projects";
import DeadlineCta from "@/components/canada-startup/DeadlineCta";
import Pathway from "@/components/canada-startup/Pathway";
import Faq from "@/components/canada-startup/Faq";
import Contact from "@/components/canada-startup/Contact";

export default function CanadaStartupPage() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Orgs />
      <Eligibility />
      <Financials />
      <Process />
      <Projects />
      <DeadlineCta />
      <Pathway />
      <Faq />
      <Contact />
    </main>
  );
}
