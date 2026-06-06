import Hero from "@/components/portugal/Hero";
import Benefits from "@/components/portugal/Benefits";
import Eligibility from "@/components/portugal/Eligibility";
import FinancialRequirements from "@/components/portugal/FinancialRequirements";
import ProcessSteps from "@/components/portugal/ProcessSteps";
import PathwayToPassport from "@/components/portugal/PathwayToPassport";
import CitizenshipCTA from "@/components/portugal/CitizenshipCTA";
import FAQs from "@/components/portugal/FAQs";
import ContactForm from "@/components/portugal/ContactForm";

export default function PortugalPage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Eligibility />
      <FinancialRequirements />
      <ProcessSteps />
      <PathwayToPassport />
      <CitizenshipCTA />
      <FAQs />
      <ContactForm />
    </main>
  );
}
