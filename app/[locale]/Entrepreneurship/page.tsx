import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Entrepreneurship/Hero";
import StatsBand from "@/components/Entrepreneurship/StatsBand";
import Markets from "@/components/Entrepreneurship/Markets";
import Services from "@/components/Entrepreneurship/Services";
import WhatIs from "@/components/Entrepreneurship/WhatIs";
import ForWhom from "@/components/Entrepreneurship/ForWhom";
import Impact from "@/components/Entrepreneurship/Impact";
import Projects from "@/components/Entrepreneurship/Projects";
import FAQ from "@/components/Entrepreneurship/FAQ";
import ContactForm from "@/components/Entrepreneurship/ContactForm";

export const metadata = {
  title: "Nexa | Entrepreneurship",
  description:
    "Launch your next business branch in the global market. Nexa guides ambitious founders to scale globally through government-backed entrepreneurship programs in Canada, Spain, Finland, Portugal, and the Netherlands.",
};

export default async function EntrepreneurshipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full bg-white">
      <Hero />
      <StatsBand />
      <Markets />
      <Services />
      <WhatIs />
      <ForWhom />
      <Impact />
      <Projects />
      <FAQ />
      <ContactForm />
    </div>
  );
}
