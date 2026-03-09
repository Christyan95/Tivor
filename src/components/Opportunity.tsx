"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, ShieldCheck, TrendingUp, BarChart, Handshake } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";

export const Opportunity = () => {
    const t = useTranslation();
    return (
        <section id="opportunity" className="py-24 lg:py-32 bg-white relative border-y border-slate-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50/40 to-white z-0" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* A Oportunidade */}
                    <div className="lg:w-[45%]">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-cyan-700 font-bold tracking-[0.2em] uppercase mb-6 text-xs flex items-center gap-4"
                        >
                            <span className="w-8 h-px bg-cyan-600"></span>
                            {t.opportunity.badge}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight"
                        >
                            {t.opportunity.titleLine1} <br />
                            {t.opportunity.titleLine2}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-8 text-slate-600 text-lg font-light leading-relaxed"
                        >
                            <p>
                                {t.opportunity.desc1} <strong className="text-cyan-800 font-semibold bg-cyan-50 px-2 rounded-md">{t.opportunity.desc1Strong}</strong>{t.opportunity.desc2}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                                {[
                                    { icon: Handshake, text: t.opportunity.bullet1 },
                                    { icon: BarChart, text: t.opportunity.bullet2 },
                                    { icon: ShieldCheck, text: t.opportunity.bullet3 },
                                    { icon: TrendingUp, text: t.opportunity.bullet4 }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-center gap-4 bg-white border border-slate-200/80 shadow-[0_5px_20px_rgba(0,0,0,0.02)] p-4 rounded-2xl hover:border-cyan-200 transition-colors"
                                    >
                                        <div className="bg-cyan-50/80 p-2.5 rounded-xl shrink-0 border border-cyan-100">
                                            <item.icon className="text-cyan-700 w-5 h-5" />
                                        </div>
                                        <span className="text-slate-800 text-[13px] font-semibold tracking-wide">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="border-l-[3px] border-cyan-500 pl-6 py-3 bg-gradient-to-r from-cyan-50 to-transparent mt-10 rounded-r-2xl text-slate-700 font-medium">
                                {t.opportunity.coreIntelligence1} <br className="hidden md:block" /> {t.opportunity.coreIntelligence2} <strong className="text-cyan-900 font-bold">{t.opportunity.coreIntelligence3}</strong>.
                            </div>
                        </motion.div>
                    </div>

                    {/* Nasce a TIVOR */}
                    <div className="lg:w-[55%] w-full relative group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)] blur-[120px] rounded-full mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white border border-slate-200 rounded-[40px] p-10 lg:p-14 relative z-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.06)] overflow-hidden"
                        >
                            <div className="absolute top-10 right-10 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-10 mix-blend-overlay">
                                <Rocket className="w-64 h-64 text-cyan-900" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm"
                            >
                                {t.opportunity.responseBadge}
                            </motion.div>

                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 mb-8 leading-[1.1]">
                                {t.opportunity.responseTitle}
                            </h3>

                            <p className="text-slate-600 text-xl font-light leading-relaxed mb-12">
                                {t.opportunity.responseDesc1}
                                <strong className="text-slate-900 font-semibold border-b border-slate-300"> {t.opportunity.responseDesc2}</strong>
                            </p>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 bg-slate-50/80 p-6 rounded-3xl border border-slate-200/80 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-md hover:bg-white transition-all duration-300 cursor-default">
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 shrink-0 self-start sm:self-center">
                                    <Lightbulb className="text-cyan-600 w-8 h-8" />
                                </div>
                                <p className="text-base text-slate-700 font-medium leading-relaxed">
                                    {t.opportunity.motorDesc1}
                                    <strong> {t.opportunity.motorDesc2}</strong>.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Opportunity;
