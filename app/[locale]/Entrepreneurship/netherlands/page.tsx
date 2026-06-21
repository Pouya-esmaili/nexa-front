import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/netherlands-entrepreneurship/Hero";
import RVOPoints from "@/components/netherlands-entrepreneurship/RVOPoints";
import DocumentRequirements from "@/components/netherlands-entrepreneurship/DocumentRequirements";
import Financials from "@/components/netherlands-entrepreneurship/Financials";
import ProcessSteps from "@/components/netherlands-entrepreneurship/ProcessSteps";
import Pathway from "@/components/netherlands-entrepreneurship/Pathway";
import PointsCTA from "@/components/netherlands-entrepreneurship/PointsCTA";
import FAQs from "@/components/netherlands-entrepreneurship/FAQs";
import ContactForm from "@/components/netherlands-entrepreneurship/ContactForm";

export default async function NetherlandsEntrepreneurshipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <RVOPoints />
      <DocumentRequirements />
      <Financials />
      <ProcessSteps />
      <Pathway />
      <PointsCTA />
      <FAQs />
      <ContactForm />
    </main>
  );
}
