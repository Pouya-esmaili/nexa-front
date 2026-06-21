import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/greece/Hero";
import Benefits from "@/components/greece/Benefits";
import Tiers from "@/components/greece/Tiers";
import Compliance from "@/components/greece/Compliance";
import Financials from "@/components/greece/Financials";
import Process from "@/components/greece/Process";
import Renewal from "@/components/greece/Renewal";
import Faq from "@/components/greece/Faq";
import Contact from "@/components/greece/Contact";

export default async function GreecePage({
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
      <Tiers />
      <Compliance />
      <Financials />
      <Process />
      <Renewal />
      <Faq />
      <Contact />
    </main>
  );
}
