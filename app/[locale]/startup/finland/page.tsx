import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/finland/Hero";
import WhyFinland from "@/components/finland/WhyFinland";
import Eligibility from "@/components/finland/Eligibility";
import FinancialRequirements from "@/components/finland/FinancialRequirements";
import ProcessSteps from "@/components/finland/ProcessSteps";
import PathwayToPassport from "@/components/finland/PathwayToPassport";
import NexaRole from "@/components/finland/NexaRole";
import AlertBanner from "@/components/finland/AlertBanner";
import FAQs from "@/components/finland/FAQs";
import ContactForm from "@/components/finland/ContactForm";

export const metadata = {
  title: "Nexa | Finland Startup Program",
  description:
    "Build a global company from inside the European Union. Finland's Startup Permit — €0 minimum capital, 14-day fast track, path to EU passport in 6 years.",
};

export default async function FinlandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full bg-white">
      <Hero />
      <WhyFinland />
      <Eligibility />
      <FinancialRequirements />
      <ProcessSteps />
      <PathwayToPassport />
      <NexaRole />
      <AlertBanner />
      <FAQs />
      <ContactForm />
    </div>
  );
}
