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
import { TranslationProvider } from "@/i18n/TranslationContext";
import { dictionaries, Locale } from "@/i18n";
import LoadingScreen from "@/components/LoadingScreen";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale as Locale;
  const dict = dictionaries[locale] || dictionaries.pt;

  return (
    <main id="top" className="min-h-screen bg-slate-50 text-slate-800 selection:bg-cyan-500/20 font-sans">
      <TranslationProvider dictionary={dict}>
        <LoadingScreen />
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
