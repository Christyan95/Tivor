"use client";

import { motion } from "framer-motion";
import { Copyleft, Activity, Database, GitMerge, FileSpreadsheet, Cpu } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslation } from "@/i18n/TranslationContext";

const TechCanvas = dynamic(() => import("./TechCanvas"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gradient-to-tr from-cyan-50/40 via-slate-50 to-transparent animate-pulse rounded-[32px]" />
    ),
});

const toolIcons = [Copyleft, Cpu, Activity, Database, GitMerge, FileSpreadsheet];

export const Technology = () => {
    const t = useTranslation();
    const mergedTools = t.technology.tools.map((tool: any, index: number) => ({
        ...tool,
        icon: toolIcons[index]
    }));

    return (
        <section id="technology" className="py-16 lg:py-20 bg-white relative border-y border-slate-100 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-50/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
                    backgroundSize: "48px 48px"
                }}
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left content */}
                    <div className="lg:w-[50%] w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm self-start"
                        >
                            {t.technology.badge}
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]"
                        >
                            {t.technology.titleLine1} <br />
                            {t.technology.titleLine2}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-base sm:text-lg font-light leading-relaxed mb-12 px-1"
                        >
                            {t.technology.desc1} <strong className="text-slate-900 font-semibold border-b border-slate-300">{t.technology.desc1Strong}</strong>{t.technology.desc2}
                        </motion.p>

                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-5">
                            {mergedTools.map((tool: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex items-start gap-4 p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm hover:border-cyan-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-default"
                                >
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-cyan-50 group-hover:border-cyan-100 transition-colors group-hover:scale-110 transition-transform">
                                        <tool.icon className="text-slate-600 group-hover:text-cyan-600 w-6 h-6 shrink-0 transition-colors group-hover:rotate-3 transition-transform" />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="text-slate-900 font-bold text-[14px] tracking-tight mb-1 group-hover:text-cyan-700 transition-colors">{tool.name}</h4>
                                        <p className="text-slate-500 text-[12px] font-light leading-normal">{tool.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Abstract Visualizer */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-[50%] w-full flex justify-center mt-12 lg:mt-0 relative group"
                    >
                        <div className="w-full aspect-square max-h-[600px] border border-slate-200 rounded-[40px] bg-slate-50/40 p-6 relative overflow-hidden flex items-center justify-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] group-hover:border-cyan-200 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/60 via-white to-transparent" />

                            {/* 3D Core Engine Render - Lazy Loaded */}
                            <div className="absolute inset-0 z-10">
                                <TechCanvas />
                            </div>

                            {/* Inner Node Overlay Text below model */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                                <motion.span 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="text-slate-900 font-black tracking-[0.2em] text-[10px] uppercase bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-100 shadow-lg"
                                >
                                    Core Engine 3D
                                </motion.span>
                            </div>

                            {/* Decorative connections */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.4)_100%)] pointer-events-none"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
