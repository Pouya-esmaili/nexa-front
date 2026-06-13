import Hero from "@/components/startup/hero";
import StatsBand from "@/components/startup/statsBand";
import StartupCountries from "@/components/startup/countries";
import StartupServices from "@/components/startup/services";
import WhatIsStartup from "@/components/startup/whatIsStartup";
import StartupDesignedFor from "@/components/startup/designedFor";
import WhyImportant from "@/components/startup/whyImportant";
import StartupPreviousProjects from "@/components/startup/previous";
import StartupFAQ from "@/components/startup/faq";
import StartupContactForm from "@/components/startup/contactForm";

export const metadata = {
  title: "Nexa | Startup",
  description:
    "Your independent global startup partner. Nexa supports founders on their path to global growth — from idea to scale, capital access to immigration — across Finland, Canada, UK, Netherlands, and France.",
};

export default function StartupPage() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <StatsBand />
      <StartupCountries />
      <StartupServices />
      <WhatIsStartup />
      <StartupDesignedFor />
      <WhyImportant />
      <StartupPreviousProjects />
      <StartupFAQ />
      <StartupContactForm />
    </div>
  );
}
