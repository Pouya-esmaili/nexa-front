import Hero from "@/components/france-investor/Hero";
import Overview from "@/components/france-investor/Overview";
import Investment from "@/components/france-investor/Investment";
import Eligibility from "@/components/france-investor/Eligibility";
import Documents from "@/components/france-investor/Documents";
import ProcessSteps from "@/components/france-investor/ProcessSteps";
import Pathway from "@/components/france-investor/Pathway";
import ActiveCapitalCTA from "@/components/france-investor/ActiveCapitalCTA";
import FAQs from "@/components/france-investor/FAQs";
import ContactForm from "@/components/france-investor/ContactForm";

export default function FranceTalentPassportPage() {
  return (
    <>
      <Hero />
      <Overview />
      <Investment />
      <Eligibility />
      <Documents />
      <ProcessSteps />
      <Pathway />
      <ActiveCapitalCTA />
      <FAQs />
      <ContactForm />
    </>
  );
}
