"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Network,
    Cpu,
    Layers,
    Activity,
    Eye,
    PieChart,
    ShieldCheck,
    TrendingUp,
    LineChart,
    Building2,
    Briefcase
} from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";

export const Ecosystem = () => {
    const t = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Map the lucide icons dynamically or statically for the features
    const hubIcons = [
        <Cpu key="cpu" className="w-6 h-6" />,
        <Network key="net" className="w-6 h-6" />,
        <Eye key="eye" className="w-6 h-6" />,
        <Layers key="layer" className="w-6 h-6" />,
        <PieChart key="pie" className="w-6 h-6" />,
        <Activity key="act" className="w-6 h-6" />
    ];

    const combinationIcons = [
        <Building2 key="b1" className="w-8 h-8 text-emerald-600" />,
        <ShieldCheck key="b2" className="w-8 h-8 text-emerald-600" />,
        <Cpu key="b3" className="w-8 h-8 text-emerald-600" />,
        <LineChart key="b4" className="w-8 h-8 text-emerald-600" />
    ];

    return (
        <section ref={containerRef} id="ecosystem" className="py-24 lg:py-40 bg-slate-900 text-white relative overflow-hidden">
            {/* Dark elegant background with soft glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0" />

            <motion.div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    y: yBackground,
                    backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                {/* Section 1: Grupo JEE */}
                <motion.div
                    style={{ opacity: opacityHero }}
                    className="text-center mb-24 lg:mb-32 max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-8"
                    >
                        <Network className="w-4 h-4" />
                        {t.ecosystem.badge}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-6xl xl:text-7xl font-black mb-8 leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
                    >
                        {t.ecosystem.titleLine1} <br />
                        <span className="text-emerald-400">{t.ecosystem.titleLine2}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 font-light"
                    >
                        {t.ecosystem.groupDesc}
                    </motion.p>
                </motion.div>

                {/* Section 2: HUB Tecnológico JEE */}
                <div className="mb-32 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -z-10" />

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/3">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="sticky top-40"
                            >
                                <div className="text-emerald-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs flex items-center gap-4">
                                    <span className="w-8 h-px bg-emerald-500"></span>
                                    {t.ecosystem.hubBadge}
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black mb-6">
                                    {t.ecosystem.hubTitle}
                                </h3>
                                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                                    {t.ecosystem.hubMainDesc}
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            {t.ecosystem.hubFeatures.map((feature: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                                        {hubIcons[index]}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-slate-400 font-light">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 3: TIVOR + HUB */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 lg:p-16"
                >
                    {/* Abstract architectural shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen mix-blend-overlay pointer-events-none" />

                    <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                        <div className="lg:w-1/2">
                            <div className="text-emerald-400 font-bold tracking-[0.2em] uppercase mb-6 text-xs flex items-center gap-4">
                                <Activity className="w-4 h-4" />
                                {t.ecosystem.combinationBadge}
                            </div>

                            <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                                {t.ecosystem.combinationTitle1} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t.ecosystem.combinationTitle2}</span>
                            </h3>

                            <p className="text-slate-300 text-lg font-light mb-10">
                                {t.ecosystem.combinationDesc}
                            </p>

                            <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-800">
                                <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                                    {t.ecosystem.focusTitle}
                                </h4>
                                <ul className="space-y-4">
                                    {t.ecosystem.focusItems.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                                                <TrendingUp className="w-3 h-3" />
                                            </div>
                                            <span className="text-slate-300 font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <h4 className="text-white font-medium mb-8 text-xl border-b border-slate-700 pb-4">
                                {t.ecosystem.combinationUnitesTitle}
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {t.ecosystem.combinationUnites.map((item: string, i: number) => (
                                    <div key={i} className="bg-slate-800 border border-slate-700 p-6 rounded-2xl hover:-translate-y-1 transition-transform group shadow-lg">
                                        <div className="mb-4">
                                            {combinationIcons[i]}
                                        </div>
                                        <h5 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                                            {item}
                                        </h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Ecosystem;
