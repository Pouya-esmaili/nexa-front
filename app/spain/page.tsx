import Hero from "@/components/spain/Hero";
import Benefits from "@/components/spain/Benefits";
import Eligibility from "@/components/spain/Eligibility";
import FinancialRequirements from "@/components/spain/FinancialRequirements";
import ProcessSteps from "@/components/spain/ProcessSteps";
import PathwayToPassport from "@/components/spain/PathwayToPassport";
import OnshoreCTA from "@/components/spain/OnshoreCTA";
import FAQs from "@/components/spain/FAQs";
import ContactForm from "@/components/spain/ContactForm";

export default function SpainPage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Eligibility />
      <FinancialRequirements />
      <ProcessSteps />
      <PathwayToPassport />
      <OnshoreCTA />
      <FAQs />
      <ContactForm />
    </main>
  );
}
