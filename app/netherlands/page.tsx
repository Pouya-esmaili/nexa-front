import Hero from "@/components/netherlands/Hero";
import WhyNetherlands from "@/components/netherlands/WhyNetherlands";
import Eligibility from "@/components/netherlands/Eligibility";
import FinancialRequirements from "@/components/netherlands/FinancialRequirements";
import ProcessSteps from "@/components/netherlands/ProcessSteps";
import PathwayToPassport from "@/components/netherlands/PathwayToPassport";
import GovernmentFees from "@/components/netherlands/GovernmentFees";
import FAQs from "@/components/netherlands/FAQs";
import ContactForm from "@/components/netherlands/ContactForm";

export default function NetherlandsPage() {
  return (
    <main>
      <Hero />
      <WhyNetherlands />
      <Eligibility />
      <FinancialRequirements />
      <ProcessSteps />
      <PathwayToPassport />
      <GovernmentFees />
      <FAQs />
      <ContactForm />
    </main>
  );
}
