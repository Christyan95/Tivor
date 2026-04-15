"use client";

import { motion } from "framer-motion";
import { 
    Layers, 
    Calculator, 
    Wallet, 
    ShieldAlert, 
    Receipt, 
    Users, 
    FileCheck, 
    BarChart3,
    ArrowLeft,
    CheckCircle2
} from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Locale } from "@/i18n";

interface HubJeeClientProps {
    locale: Locale;
}

const iconMap: Record<string, any> = {
    JeeHub: Layers,
    JeeCount: Calculator,
    JeeBudget: Wallet,
    JeeRisk: ShieldAlert,
    JeeCob: Receipt,
    Jee360: Users,
    JeeGarant: FileCheck,
    JeeBI: BarChart3,
};

const HubJeeClient = ({ locale }: HubJeeClientProps) => {
    const t = useTranslation();
    const solutions = t.hubJee.solutions;

    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
            <Navbar />
            
            <main className="flex-grow pt-32 pb-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Hero Section - Senior Design */}
                    <div className="relative mb-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-emerald-600 text-xs font-black uppercase tracking-widest mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            {t.hubJee.badge}
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight max-w-5xl mx-auto"
                        >
                            {t.hubJee.title.split('Hub').map((part, i) => i === 0 ? part : <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Hub{part}</span>)}
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto"
                        >
                            {t.hubJee.description}
                        </motion.p>
                    </div>

                    {/* Solutions Grid - Large High-End Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {solutions.map((solution, index) => {
                            const Icon = iconMap[solution.id] || Layers;
                            return (
                                <motion.div
                                    key={solution.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="relative group h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative h-full p-10 md:p-12 rounded-[40px] bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] group-hover:border-emerald-500/10 transition-all duration-500 flex flex-col">
                                        
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="w-20 h-20 rounded-[28px] bg-slate-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-inner">
                                                <Icon className="w-10 h-10" />
                                            </div>
                                            <CheckCircle2 className="w-6 h-6 text-emerald-500/20 group-hover:text-emerald-500 transition-colors" />
                                        </div>

                                        <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight group-hover:text-emerald-700 transition-colors">
                                            {solution.title}
                                        </h3>
                                        
                                        <p className="text-slate-500 font-normal text-lg leading-relaxed mb-auto">
                                            {solution.desc}
                                        </p>

                                        <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">{locale === 'pt' ? 'Saiba Mais' : 'Learn More'}</span>
                                            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                <ArrowLeft className="w-5 h-5 rotate-180" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HubJeeClient;
