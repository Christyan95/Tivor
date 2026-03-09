"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Banknote, Landmark, Crosshair, AlertCircle, Users } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";

export const Challenges = () => {
    const t = useTranslation();

    return (
        <section id="challenges" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[10px] sm:text-xs font-bold text-red-600 bg-red-50 border border-red-100/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm"
                    >
                        {t.challenges.badge}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight"
                    >
                        {t.challenges.titleLine1} <br />
                        <span className="text-red-600">{t.challenges.titleLine2}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-600 max-w-3xl mx-auto text-xl font-light leading-relaxed"
                    >
                        {t.challenges.desc1}
                        <strong className="text-slate-900 font-semibold"> {t.challenges.desc1Strong}</strong> {t.challenges.desc2} <strong className="text-red-600 font-semibold border-b border-red-200">{t.challenges.desc2Strong}</strong>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                    {/* O Desafio - Vetted */}
                    <div className="bg-white p-12 rounded-[32px] border border-slate-200 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(255,237,213,0.8),transparent_70%)] opacity-50 pointer-events-none" />

                        <div className="flex items-center gap-5 mb-10 relative z-10">
                            <div className="w-16 h-16 rounded-[20px] bg-orange-50 flex items-center justify-center border border-orange-100 text-orange-600 shadow-sm">
                                <Crosshair className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{t.challenges.factorTitle}</h3>
                        </div>

                        <p className="text-slate-600 font-light text-lg mb-8 relative z-10">
                            {t.challenges.factorDesc}
                        </p>

                        <ul className="space-y-5 font-medium text-slate-700 relative z-10">
                            {t.challenges.factors.map((item: string, i: number) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                                >
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* O Problema - Critical */}
                    <div className="bg-red-50/50 border border-red-100 rounded-[32px] p-12 relative overflow-hidden shadow-[0_15px_60px_-15px_rgba(239,68,68,0.05)]">
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(254,226,226,0.8),transparent_70%)] opacity-80 pointer-events-none" />

                        <div className="flex items-center gap-5 mb-8 relative z-10">
                            <div className="w-16 h-16 rounded-[20px] bg-white flex items-center justify-center border border-red-200 shadow-sm text-red-500">
                                <AlertCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{t.challenges.criticalTitle}</h3>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-red-100/50 shadow-sm mb-10 relative z-10">
                            <p className="text-slate-800 font-medium text-lg leading-relaxed">
                                {t.challenges.criticalDesc1} <strong className="text-red-600 bg-red-50 px-2 rounded-md">{t.challenges.criticalDesc2}</strong>{t.challenges.criticalDesc3}
                            </p>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {t.challenges.problems.map((prob: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="bg-white border border-red-100/60 hover:border-red-200 hover:shadow-md rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 transition-all"
                                >
                                    <div className="p-3 bg-red-50/80 rounded-xl shrink-0 text-red-500 border border-red-100">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-slate-900 font-bold text-base mb-2">{prob.title}</h4>
                                        <p className="text-slate-600 font-light leading-relaxed">{prob.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenges;
