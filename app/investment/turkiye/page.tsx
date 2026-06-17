import "./turkiye.css";
import Hero from "@/components/turkiye/Hero";
import WhyTurkiye from "@/components/turkiye/WhyTurkiye";
import Residency from "@/components/turkiye/Residency";
import Cities from "@/components/turkiye/Cities";
import Eligibility from "@/components/turkiye/Eligibility";
import CBIProgram from "@/components/turkiye/CBIProgram";
import InvestmentRequirements from "@/components/turkiye/InvestmentRequirements";
import Benefits from "@/components/turkiye/Benefits";
import Partner from "@/components/turkiye/Partner";
import FAQs from "@/components/turkiye/FAQs";
import ContactForm from "@/components/turkiye/ContactForm";

export const metadata = {
  title: "Nexa | Türkiye Residency & Citizenship by Real Estate Investment",
  description:
    "Secure Turkish residency and citizenship through structured real estate investment. USD 600K minimum — at the crossroads of Europe, Asia and the Middle East.",
};

export default function TurkiyePage() {
  return (
    <div className="tk-root">
      <Hero />
      <WhyTurkiye />
      <Residency />
      <Cities />
      <Eligibility />
      <CBIProgram />
      <InvestmentRequirements />
      <Benefits />
      <Partner />
      <FAQs />
      <ContactForm />
    </div>
  );
}
