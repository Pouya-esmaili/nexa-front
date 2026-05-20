import Hero from "@/components/startup/hero";
import StartupCountries from "@/components/startup/countries";
import StartupServices from "@/components/startup/services";
import WhatIsStartup from "@/components/startup/whatIsStartup";
import StartupDesignedFor from "@/components/startup/designedFor";
import WhyImportant from "@/components/startup/whyImportant";
import StartupPreviousProjects from "@/components/startup/previous";
import StartupFAQ from "@/components/startup/faq";
import ContactForm from "@/components/home/form";

export default function StartupPage() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <StartupCountries />
      <StartupServices />
      <WhatIsStartup />
      <StartupDesignedFor />
      <WhyImportant />
      <StartupPreviousProjects />
      <StartupFAQ />
      <ContactForm />
    </div>
  );
}
