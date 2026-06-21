import { setRequestLocale } from "next-intl/server";
import OurStoryPage from "@/components/About/OurStoryPage";

export default async function AboutUs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <OurStoryPage />;
}
