import Hero from "@/components/finland-entrepreneurship/Hero";
import Eligibility from "@/components/finland-entrepreneurship/Eligibility";
import Financials from "@/components/finland-entrepreneurship/Financials";
import Documents from "@/components/finland-entrepreneurship/Documents";
import ProcessSteps from "@/components/finland-entrepreneurship/ProcessSteps";
import Healthcare from "@/components/finland-entrepreneurship/Healthcare";
import Pathway from "@/components/finland-entrepreneurship/Pathway";
import GatewayCTA from "@/components/finland-entrepreneurship/GatewayCTA";
import FAQs from "@/components/finland-entrepreneurship/FAQs";
import ContactForm from "@/components/finland-entrepreneurship/ContactForm";

export default function FinlandSelfEmployedPage() {
  return (
    <main>
      <Hero />
      <Eligibility />
      <Financials />
      <Documents />
      <ProcessSteps />
      <Healthcare />
      <Pathway />
      <GatewayCTA />
      <FAQs />
      <ContactForm />
    </main>
  );
}
