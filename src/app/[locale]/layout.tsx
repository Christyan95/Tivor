import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import { TranslationProvider } from "@/i18n/TranslationContext";
import { dictionaries, Locale } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale;

  const meta = {
    pt: {
      title: "TIVOR | Arquitetura Financeira de Alta Performance",
      description:
        "A TIVOR é uma corporação especializada em Arquitetura Financeira e Governança para o Agronegócio. Elevamos a gestão financeira a um patamar de excelência global.",
    },
    en: {
      title: "TIVOR | High Performance Financial Architecture",
      description:
        "TIVOR is a corporation specialized in Financial Architecture and Governance for Agribusiness. We elevate financial management to a benchmark of global excellence.",
    },
  };

  const current = meta[locale as keyof typeof meta] || meta.pt;

  return {
    title: current.title,
    description: current.description,
    icons: {
      icon: "/icone.webp",
      shortcut: "/icone.webp",
      apple: "/icone.png",
    },
    openGraph: {
      title: current.title,
      description: current.description,
      siteName: "TIVOR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: current.title,
      description: current.description,
    },
  };
}

import { Toaster } from "sonner";
import AnalyticsEngine from "@/components/analytics/AnalyticsEngine";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale as Locale;
  const dict = dictionaries[locale] || dictionaries.pt;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
        <TranslationProvider dictionary={dict}>
          <LoadingScreen />
          <AnalyticsEngine />
          <Toaster position="top-right" richColors />
          <SmoothScroll>{children}</SmoothScroll>
        </TranslationProvider>
      </body>
    </html>
  );
}
