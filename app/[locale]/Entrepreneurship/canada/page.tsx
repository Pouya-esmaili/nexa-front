import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/canada-entrepreneurship/Hero";
import WhyCanada from "@/components/canada-entrepreneurship/WhyCanada";
import ProvincialModel from "@/components/canada-entrepreneurship/ProvincialModel";
import Provinces from "@/components/canada-entrepreneurship/Provinces";
import EligibilityBasics from "@/components/canada-entrepreneurship/EligibilityBasics";
import ProcessTimeline from "@/components/canada-entrepreneurship/ProcessTimeline";
import MustKnow from "@/components/canada-entrepreneurship/MustKnow";
import NexaRole from "@/components/canada-entrepreneurship/NexaRole";
import Compare from "@/components/canada-entrepreneurship/Compare";
import Alert2026 from "@/components/canada-entrepreneurship/Alert2026";
import FAQSection from "@/components/canada-entrepreneurship/FAQSection";
import AppointmentForm from "@/components/canada-entrepreneurship/AppointmentForm";

export const metadata = {
  title: "Nexa | Canada Entrepreneurship",
  description:
    "Build a scalable company in Canada. Explore provincial entrepreneur streams, eligibility, and how Nexa guides you from EOI to Permanent Residence.",
};

export default async function CanadaEntrepreneurshipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full bg-white">
      <Hero />
      <WhyCanada />
      <ProvincialModel />
      <Provinces />
      <EligibilityBasics />
      <ProcessTimeline />
      <MustKnow />
      <NexaRole />
      <Compare />
      <Alert2026 />
      <FAQSection />
      <AppointmentForm />
    </div>
  );
}
