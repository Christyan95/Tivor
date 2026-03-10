"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslation } from "@/i18n/TranslationContext";
import { useLenis } from "lenis/react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gradient-to-br from-emerald-50/30 via-transparent to-cyan-50/20 animate-pulse" />
    ),
});

export const Hero = () => {
    const t = useTranslation();
    const lenis = useLenis();

    const scrollTo = (href: string) => {
        const target = document.querySelector(href);
        if (target && lenis) {
            lenis.scrollTo(target as HTMLElement, { duration: 2.0, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
        }
    };

    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden pt-24 bg-slate-50">
            {/* Minimalist premium background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-100/40 rounded-full blur-[120px] mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-20%] w-[70vw] h-[70vw] bg-cyan-50/60 rounded-full blur-[150px] mix-blend-multiply" />
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}
                />
            </div>

            {/* 3D Immersive Environment - Lazy Loaded */}
            <div className="absolute inset-0 z-0">
                <HeroCanvas />
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-[10px] sm:text-xs font-bold text-slate-600 bg-white border border-slate-200/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    {t.hero.badge}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95]">
                        {t.hero.titleLine1} <br className="hidden md:block" />
                        <span className="relative inline-block mt-2">
                            {t.hero.titleLine2}
                            <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-2 sm:h-3 bg-emerald-400/20 rounded-full -z-10"></span>
                        </span> <br className="md:hidden" />
                        {t.hero.titleLine3}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-slate-600 mb-12 leading-relaxed px-4"
                >
                    {t.hero.description1} <strong className="font-semibold text-slate-900">{t.hero.description2}</strong> {t.hero.description3}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6"
                >
                    <button onClick={() => scrollTo('#context')} className="w-full sm:w-auto px-10 py-4 text-sm md:text-base font-bold text-white bg-slate-900 rounded-full hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 group shadow-xl hover:shadow-emerald-500/20 active:scale-95 duration-300" aria-label={t.hero.primaryButton}>
                        {t.hero.primaryButton}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button onClick={() => scrollTo('#ecosystem')} className="w-full sm:w-auto px-10 py-4 text-sm md:text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm active:scale-95 duration-300" aria-label={t.hero.secondaryButton}>
                        {t.hero.secondaryButton}
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indication */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-slate-300 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
