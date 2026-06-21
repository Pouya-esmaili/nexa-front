import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getMessages } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import NavLoader from "@/components/global/NavLoader";
import LinkPrefetcher from "@/components/global/LinkPrefetcher";

export const metadata: Metadata = {
  title: "Nexa",
  description:
    "Your Global Launchpad for Investment, Startups & Growth.",
  icons: {
    icon: "/images/logo.svg",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`antialiased ${locale === "fa" ? "font-vazirmatn" : ""}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavLoader />
          <LinkPrefetcher />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
