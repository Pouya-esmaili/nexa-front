import Hero from "@/components/france/Hero";
import WhyFrance from "@/components/france/WhyFrance";
import Eligibility from "@/components/france/Eligibility";
import FinancialRequirements from "@/components/france/FinancialRequirements";
import ProcessSteps from "@/components/france/ProcessSteps";
import PathwayToPassport from "@/components/france/PathwayToPassport";
import GovernmentFees from "@/components/france/GovernmentFees";
import FAQs from "@/components/france/FAQs";
import ContactForm from "@/components/france/ContactForm";

export const metadata = {
  title: "Nexa | French Tech Visa for Founders",
  description:
    "Launch your innovative venture at the heart of Europe. French Tech Visa — no minimum capital, 4-year runway, path to EU residency in 5 years.",
};

export default function FrancePage() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <WhyFrance />
      <Eligibility />
      <FinancialRequirements />
      <ProcessSteps />
      <PathwayToPassport />
      <GovernmentFees />
      <FAQs />
      <ContactForm />
    </div>
  );
}
