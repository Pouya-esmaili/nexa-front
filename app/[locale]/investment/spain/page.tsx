import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/spain-investor/Hero";
import InvestmentTiers from "@/components/spain-investor/InvestmentTiers";
import Enterprise from "@/components/spain-investor/Enterprise";
import Requirements from "@/components/spain-investor/Requirements";
import IPREM from "@/components/spain-investor/IPREM";
import ProcessSteps from "@/components/spain-investor/ProcessSteps";
import Pathway from "@/components/spain-investor/Pathway";
import NoPropertyCTA from "@/components/spain-investor/NoPropertyCTA";
import FAQs from "@/components/spain-investor/FAQs";
import ContactForm from "@/components/spain-investor/ContactForm";

export default async function SpainInvestorVisaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <InvestmentTiers />
      <Enterprise />
      <Requirements />
      <IPREM />
      <ProcessSteps />
      <Pathway />
      <NoPropertyCTA />
      <FAQs />
      <ContactForm />
    </main>
  );
}
