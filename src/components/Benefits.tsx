"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, PieChart, Users, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";

export const Benefits = () => {
    const t = useTranslation();
    return (
        <section id="benefits" className="py-24 lg:py-32 bg-white relative border-y border-slate-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_70%)] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_70%)] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Aliança Estratégica Institucional */}
                    <div className="lg:w-[45%] lg:pr-10">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[10px] sm:text-xs font-bold text-cyan-800 bg-cyan-100 border border-cyan-200/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm self-start"
                        >
                            {t.benefits.badge}
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]"
                        >
                            {t.benefits.titleLine1} <br />
                            <span className="text-cyan-700">{t.benefits.titleLine2}</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg font-light leading-relaxed mb-10"
                        >
                            {t.benefits.desc1} <strong className="text-slate-900 font-semibold border-b border-cyan-200">{t.benefits.desc1Strong}</strong> {t.benefits.desc2}
                        </motion.p>

                        <div className="space-y-4">
                            {t.benefits.features.map((item: string, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-4 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:border-cyan-200 transition-colors group cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100 group-hover:scale-105 transition-transform">
                                        <ChevronRight className="text-cyan-600 w-5 h-5" />
                                    </div>
                                    <span className="text-slate-700 font-semibold text-[13px] tracking-wide relative">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Impacto Direto e Mensurável */}
                    <div className="lg:w-[55%] relative w-full pt-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-slate-900 border border-slate-800 rounded-[40px] p-10 lg:p-14 relative shadow-[0_30px_80px_-15px_rgba(15,23,42,0.4)] overflow-hidden h-full flex flex-col justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-slate-900" />
                            <div className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                                    backgroundSize: "24px 24px"
                                }}
                            />

                            <div className="relative z-10">
                                <motion.span
                                    className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-[10px] sm:text-xs font-bold text-emerald-400 bg-white/5 border border-white/10 rounded-full uppercase tracking-[0.25em] backdrop-blur-sm self-start shadow-xl"
                                >
                                    {t.benefits.impactBadge}
                                </motion.span>

                                <h3 className="text-3xl lg:text-5xl font-black text-white mb-10 leading-tight tracking-tight">
                                    {t.benefits.impactTitle}
                                </h3>

                                <div className="grid grid-cols-2 gap-5 mb-10 text-center">
                                    {[
                                        { text: t.benefits.impactLabels[0], icon: ShieldCheck, color: "text-emerald-400" },
                                        { text: t.benefits.impactLabels[1], icon: TrendingUp, color: "text-blue-400" },
                                        { text: t.benefits.impactLabels[2], icon: PieChart, color: "text-cyan-400" },
                                        { text: t.benefits.impactLabels[3], icon: Users, color: "text-amber-400" }
                                    ].map((res: any, i: number) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            className="bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center gap-4 backdrop-blur-sm transition-all shadow-inner shadow-white/5 cursor-default group"
                                        >
                                            <div className="bg-white/5 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                                                <res.icon className={`${res.color} w-8 h-8`} />
                                            </div>
                                            <span className="text-white font-bold text-[13px] tracking-widest">{res.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-slate-300 text-center font-light leading-relaxed border-t border-slate-700 pt-8 text-base">
                                    {t.benefits.conclusion1} <strong className="text-white text-xl tracking-[0.2em] font-black uppercase block mt-3">{t.benefits.conclusionStrong}</strong>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Benefits;
