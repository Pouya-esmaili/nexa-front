import Hero from "@/components/uk/Hero";
import KeyBenefits from "@/components/uk/KeyBenefits";
import Eligibility from "@/components/uk/Eligibility";
import FinancialRequirements from "@/components/uk/FinancialRequirements";
import ProcessSteps from "@/components/uk/ProcessSteps";
import ILRAchievements from "@/components/uk/ILRAchievements";
import PathwayToPassport from "@/components/uk/PathwayToPassport";
import FAQs from "@/components/uk/FAQs";
import ContactForm from "@/components/uk/ContactForm";

export default function UKPage() {
  return (
    <main>
      <Hero />
      <KeyBenefits />
      <Eligibility />
      <FinancialRequirements />
      <ProcessSteps />
      <ILRAchievements />
      <PathwayToPassport />
      <FAQs />
      <ContactForm />
    </main>
  );
}
