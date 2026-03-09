"use client";

import { motion } from "framer-motion";
import { Trees, Wheat, Warehouse, Sprout, Tractor, Factory, MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";

const targetIcons = [Warehouse, Sprout, Factory, Trees, Tractor, MapPin, Wheat];

export const Specialization = () => {
    const t = useTranslation();
    const mergedTargets = t.specialization.targets.map((name: string, index: number) => ({
        name,
        icon: targetIcons[index]
    }));

    return (
        <section id="specialization" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white to-emerald-50/30" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Especialização Estratégica */}
                    <div className="lg:w-[45%] flex flex-col pt-10">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm self-start"
                        >
                            {t.specialization.badge}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]"
                        >
                            {t.specialization.titleLine1} <br />
                            <span className="text-emerald-700">{t.specialization.titleLine2}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg font-light leading-relaxed mb-12"
                        >
                            {t.specialization.desc1} <strong className="font-semibold text-slate-900 border-b border-emerald-200">{t.specialization.desc1Strong}</strong>
                        </motion.p>

                        <div className="flex flex-wrap gap-2.5">
                            {t.specialization.specializations.map((spec: string, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.05) }}
                                    className="px-5 py-2.5 bg-white border border-emerald-100 rounded-full font-semibold text-slate-700 text-sm shadow-[0_5px_15px_-10px_rgba(16,185,129,0.3)] hover:border-emerald-400 hover:text-emerald-800 hover:bg-emerald-50 transition-all duration-300 transform-gpu"
                                >
                                    {spec}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Ecossistema Alvo */}
                    <div className="lg:w-[55%] lg:pl-10 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white border border-slate-200 rounded-[40px] p-10 sm:p-14 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] h-full overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_70%)] opacity-100 pointer-events-none" />

                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-8 border border-slate-200"
                            >
                                {t.specialization.ecosystemBadge}
                            </motion.span>

                            <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                                {t.specialization.ecosystemTitle}
                            </h3>

                            <p className="text-slate-500 text-[15px] mb-12 font-light leading-relaxed max-w-sm">
                                {t.specialization.ecosystemDesc}
                            </p>

                            <div className="space-y-3 relative z-10">
                                {mergedTargets.map((target: any, i: number) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-center gap-5 bg-white border border-slate-100 p-4 rounded-2xl hover:border-emerald-200 hover:shadow-[0_10px_20px_-10px_rgba(16,185,129,0.15)] transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0 group-hover:scale-105 transition-transform">
                                            <target.icon className="text-emerald-700 w-5 h-5" />
                                        </div>
                                        <span className="text-slate-800 font-semibold tracking-wide text-sm">{target.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specialization;
