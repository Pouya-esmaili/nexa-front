import { setRequestLocale } from "next-intl/server";
import InvestmentHero from "@/components/investment/hero";
import InvestmentStatsBand from "@/components/investment/statsBand";
import InvestmentCountries from "@/components/investment/offer";
import InvestmentServices from "@/components/investment/value";
import InvestmentWhatIs from "@/components/investment/whatIs";
import InvestmentProcess from "@/components/investment/process";
import InvestmentSectors from "@/components/investment/sectors";
import InvestmentImpact from "@/components/investment/impact";
import InvestmentProjects from "@/components/investment/projects";
import InvestmentFAQ from "@/components/investment/faq";
import InvestmentContactForm from "@/components/investment/contactForm";

export default async function InvestmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
        <div className="w-full bg-white overflow-x-hidden">
            <InvestmentHero />
            <InvestmentStatsBand />
            <InvestmentCountries />
            <InvestmentServices />
            <InvestmentWhatIs />
            <InvestmentProcess />
            <InvestmentSectors />
            <InvestmentImpact />
            <InvestmentProjects />
            <InvestmentFAQ />
            <InvestmentContactForm />
        </div>
    );
}
