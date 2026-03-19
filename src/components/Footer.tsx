"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";
import { useLenis } from "lenis/react";

export const Footer = () => {
  const t = useTranslation();
  const lenis = useLenis();

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target && lenis) {
      lenis.scrollTo(target as HTMLElement, { duration: 2.0, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
    }
  };
  return (
    <footer className="relative bg-slate-50 pt-32 pb-12 overflow-hidden border-t border-slate-200">
      {/* Ultra-premium background gradient */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_70%)] rounded-full blur-[150px] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-[10px] sm:text-xs font-bold text-slate-700 bg-white border border-slate-200/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm self-center"
        >
          {t.footer.badge}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[1.05]"
        >
          {t.footer.titleLine1} <strong className="text-white bg-slate-900 px-3 py-1 rounded-2xl mx-1 inline-block -rotate-2 transform hover:rotate-0 transition-transform cursor-pointer">{t.footer.notTitle}</strong> {t.footer.titleLine2} <br className="hidden md:block" />
          {t.footer.titleLine3}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-2xl lg:text-3xl font-light mb-20 max-w-4xl mx-auto leading-relaxed"
        >
          {t.footer.desc1} <strong className="text-slate-900 font-semibold border-b-[3px] border-emerald-400">{t.footer.desc1Strong}</strong> {t.footer.desc2}
        </motion.p>

        {/* Final Call to Action Block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-slate-900 rounded-[48px] relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)] mx-auto max-w-5xl px-6 py-20 lg:py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm shadow-inner">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>

            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-4 leading-none select-none">
              TIVOR
            </h1>
            <p className="text-emerald-400 uppercase tracking-[0.3em] sm:tracking-[0.5em] text-xs md:text-sm font-bold mb-16 px-4 text-center">
              {t.footer.ctaBadge}
            </p>

            <button onClick={() => scrollTo('#contact')} className="bg-white text-slate-900 px-12 py-5 sm:px-14 sm:py-6 rounded-full font-black text-sm sm:text-lg flex items-center gap-4 hover:bg-emerald-50 transition-all shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:shadow-[0_25px_50px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-95 duration-300 group/btn border border-emerald-100" aria-label={t.footer.ctaButton}>
              {t.footer.ctaButton}
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300 text-emerald-600" />
            </button>
          </div>
        </motion.div>

        {/* Lower Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-full mt-32 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10"
        >
          <span className="text-slate-500 text-xs sm:text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} {t.footer.rights}
          </span>

          <div className="flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-5 py-2.5 rounded-full hover:border-slate-300 transition-colors">
            <span className="text-slate-400 text-[10px] tracking-widest uppercase font-bold">developed by</span>
            <span className="text-slate-900 font-bold tracking-tight text-sm">Christyan Silva</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
