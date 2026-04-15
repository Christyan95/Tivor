"use client";

import { motion } from "framer-motion";
import { Copyleft as Columns, BrainCircuit, ShieldAlert, Zap, Globe } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";

const pillarStyles = [
    { icon: Columns, color: "from-cyan-100 to-cyan-50", iconColor: "text-cyan-600", bgIcon: "bg-cyan-50", hoverColor: "group-hover:text-cyan-600" },
    { icon: BrainCircuit, color: "from-blue-100 to-blue-50", iconColor: "text-blue-600", bgIcon: "bg-blue-50", hoverColor: "group-hover:text-blue-600" },
    { icon: ShieldAlert, color: "from-emerald-100 to-emerald-50", iconColor: "text-emerald-600", bgIcon: "bg-emerald-50", hoverColor: "group-hover:text-emerald-600" },
    { icon: Zap, color: "from-amber-100 to-amber-50", iconColor: "text-amber-600", bgIcon: "bg-amber-50", hoverColor: "group-hover:text-amber-600" },
    { icon: Globe, color: "from-indigo-100 to-indigo-50", iconColor: "text-indigo-600", bgIcon: "bg-indigo-50", hoverColor: "group-hover:text-indigo-600" }
];

export const Services = () => {
    const t = useTranslation();

    const mergedPillars = t.services.pillars.map((pillar: any, index: number) => ({
        ...pillar,
        ...pillarStyles[index]
    }));

    return (
        <section id="services" className="py-16 lg:py-20 bg-slate-50 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[10px] sm:text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm"
                    >
                        {t.services.badge}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]"
                    >
                        {t.services.titleLine1} <br className="hidden md:block" /> {t.services.titleLine2}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed px-4"
                    >
                        {t.services.desc1} <strong className="text-slate-900 font-semibold border-b border-slate-300">{t.services.desc1Strong}</strong>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {mergedPillars.map((pillar: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white border border-slate-200 p-8 rounded-[32px] relative overflow-hidden group shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full cursor-default"
                        >
                            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 rounded-bl-full`} />

                            <div className="flex flex-col justify-between mb-8 relative z-10 gap-6">
                                <span className="text-4xl sm:text-5xl font-black text-slate-100 group-hover:text-slate-200 tracking-tighter transition-colors">0{pillar.num}.</span>
                                <div className={`w-16 h-16 ${pillar.bgIcon} rounded-[20px] flex items-center justify-center border border-white group-hover:scale-110 transition-transform duration-300`}>
                                    <pillar.icon className={`w-8 h-8 ${pillar.iconColor} group-hover:rotate-3 transition-transform`} />
                                </div>
                            </div>

                            <h3 className={`text-xl font-bold text-slate-900 mb-4 relative z-10 ${pillar.hoverColor} transition-colors tracking-tight leading-snug`}>
                                {pillar.title}
                            </h3>

                            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed relative z-10 flex-grow">
                                {pillar.desc}
                            </p>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-slate-900 group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
