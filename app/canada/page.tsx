import Hero from "@/components/canada/Hero";
import WhyCanada from "@/components/canada/WhyCanada";
import ProvincialModel from "@/components/canada/ProvincialModel";
import Provinces from "@/components/canada/Provinces";
import EligibilityBasics from "@/components/canada/EligibilityBasics";
import ProcessTimeline from "@/components/canada/ProcessTimeline";
import MustKnow from "@/components/canada/MustKnow";
import NexaRole from "@/components/canada/NexaRole";
import Compare from "@/components/canada/Compare";
import AlertBanner from "@/components/canada/AlertBanner";
import FAQs from "@/components/canada/FAQs";
import ContactForm from "@/components/canada/ContactForm";

export default function CanadaPage() {
  return (
    <main>
      <Hero />
      <WhyCanada />
      <ProvincialModel />
      <Provinces />
      <EligibilityBasics />
      <ProcessTimeline />
      <MustKnow />
      <NexaRole />
      <Compare />
      <AlertBanner />
      <FAQs />
      <ContactForm />
    </main>
  );
}
        