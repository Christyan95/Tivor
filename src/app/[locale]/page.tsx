import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgroContext from "@/components/AgroContext";
import Challenges from "@/components/Challenges";
import Opportunity from "@/components/Opportunity";
import Ecosystem from "@/components/Ecosystem";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Specialization from "@/components/Specialization";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { TranslationProvider } from "@/i18n/TranslationContext";
import { dictionaries, Locale } from "@/i18n";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale as Locale;
  const dict = dictionaries[locale] || dictionaries.pt;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-cyan-500/20 font-sans cursor-default">
      <TranslationProvider dictionary={dict}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <AgroContext />
        <Challenges />
        <Opportunity />
        <Ecosystem />
        <Services />
        <Technology />
        <Specialization />
        <Benefits />
        <Contact />
        <Footer />
      </TranslationProvider>
    </main>
  );
}
