import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import NavLoader from "../components/global/NavLoader";
import LinkPrefetcher from "../components/global/LinkPrefetcher";
import { LanguageProvider, type Lang } from "../components/global/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexavc.com"),
  title: {
    default: "Nexa Venture Capital",
    template: "%s | Nexa Venture Capital",
  },
  description:
    "Nexa helps ambitious founders build, fund, and scale globally successful businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Nexa Venture Capital",
    title: "Nexa Venture Capital",
    description:
      "Nexa helps ambitious founders build, fund, and scale globally successful businesses.",
    images: [
      {
        url: "/images/nexa-social-preview.png",
        width: 1200,
        height: 630,
        alt: "Nexa Venture Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Venture Capital",
    description:
      "Nexa helps ambitious founders build, fund, and scale globally successful businesses.",
    images: ["/images/nexa-social-preview.png"],
  },

  icons: {
    icon: "/images/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Read the persisted language from the cookie on the server so the very first
  // paint is already correct (RTL for Persian) — independent of client JS/cache.
  const cookieStore = await cookies();
  const lang: Lang = cookieStore.get("nexa-lang")?.value === "fa" ? "fa" : "en";
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider initialLang={lang}>
          <NavLoader />
          <LinkPrefetcher />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
