import { setRequestLocale } from "next-intl/server";
import ContactSection from "@/components/contact/contactsection";
import Hero from "@/components/contact/hero";

export default async function contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
        <>
            <div className="w-full bg-white sm:items-star">
                <Hero />
                <ContactSection />
            </div>
        </>
    );
}