import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/uae/Hero";
import Benefits from "@/components/uae/Benefits";
import InvestmentTiers from "@/components/uae/InvestmentTiers";
import Documents from "@/components/uae/Documents";
import ProcessSteps from "@/components/uae/ProcessSteps";
import MobilityCTA from "@/components/uae/MobilityCTA";
import FAQs from "@/components/uae/FAQs";
import ContactForm from "@/components/uae/ContactForm";

export default async function UAEGoldenVisaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Benefits />
      <InvestmentTiers />
      <Documents />
      <ProcessSteps />
      <MobilityCTA />
      <FAQs />
      <ContactForm />
    </main>
  );
}
