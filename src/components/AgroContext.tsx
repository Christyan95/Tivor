"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Users, Target } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";

export const AgroContext = () => {
    const t = useTranslation();

    // Reference for scroll container
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll progress for the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transformations based on scroll
    const opacityY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scaleY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1, 0.95]);

    return (
        <section ref={containerRef} id="context" className="py-20 lg:py-24 bg-white relative border-y border-slate-100 overflow-hidden">
            {/* Minimal Background Dotted Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }}
            />

            <motion.div
                style={{ opacity: opacityY, scale: scaleY }}
                className="container mx-auto px-6 relative z-10 max-w-7xl"
            >
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column Text - Sticky Scrolling */}
                    <div className="lg:w-[45%] relative">
                        <div className="lg:sticky lg:top-32 xl:top-40 pt-6 lg:pt-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-emerald-700 font-bold tracking-[0.2em] uppercase mb-6 text-xs flex items-center gap-4"
                            >
                                <span className="w-8 h-px bg-emerald-600"></span>
                                {t.agroContext.badge}
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight"
                            >
                                {t.agroContext.titleLine1} <br />
                                {t.agroContext.titleLine2}
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-light"
                            >
                                <p>
                                    {t.agroContext.desc1} <strong className="text-emerald-700 font-semibold">{t.agroContext.desc1Highlight}</strong>.
                                </p>

                                {/* Callout box for emphasis with hover micro-interaction */}
                                <div className="relative p-6 lg:p-8 pr-8 bg-slate-50 border border-slate-200 shadow-[inset_4px_0_0_0_#10b981] transition-all duration-300 rounded-r-xl group cursor-default">
                                    <p className="text-slate-800 font-medium group-hover:text-slate-900 transition-colors">
                                        {t.agroContext.callout1}
                                        <span className="block mt-2 font-normal text-slate-600 group-hover:text-slate-700 transition-colors">{t.agroContext.callout2} <strong className="font-semibold text-slate-900">{t.agroContext.callout2Strong}</strong>{t.agroContext.callout3}</span>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column Data Highlights - Interactive Cards */}
                    <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-8 w-full mt-12 lg:mt-0 relative h-auto lg:min-h-[500px] lg:pt-8">
                        {/* 25% PIB */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-white border border-slate-200 p-8 pt-10 rounded-[28px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 relative group h-auto lg:h-72"
                        >
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-4xl xl:text-5xl font-black text-slate-900 mb-3 tracking-tighter">25<span className="text-3xl text-slate-400">%</span></h3>
                            <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">{t.agroContext.pibNational}</p>
                            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>

                        {/* 20M Jobs */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="bg-white border border-slate-200 p-8 pt-10 rounded-[28px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 relative group h-auto lg:h-72"
                        >
                            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-4xl xl:text-5xl font-black text-slate-900 mb-3 tracking-tighter">20<span className="text-3xl text-slate-400">M</span></h3>
                            <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">{t.agroContext.jobs}</p>
                            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>

                        {/* Supremacia Global */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-white border border-slate-200 p-8 rounded-[28px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 relative sm:col-span-2 group flex flex-col sm:flex-row items-center gap-8"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{t.agroContext.globalSupremacy}</h3>
                                <p className="text-slate-600 font-light text-base leading-relaxed">
                                    {t.agroContext.globalSupremacyDesc}
                                </p>
                            </div>
                            <div className="absolute top-0 left-12 right-12 h-1 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AgroContext;
