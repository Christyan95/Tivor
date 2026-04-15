"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/i18n/TranslationContext";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslation();

    useEffect(() => {
        const handleShowLoading = () => {
            setIsLoading(true);
            document.body.style.overflow = "hidden";
            
            setTimeout(() => {
                setIsLoading(false);
                setTimeout(() => {
                    document.body.style.overflow = "";
                }, 1000);
            }, 2500); // Animation duration
        };

        window.addEventListener('show-loading', handleShowLoading);

        // Initial mount loading
        document.body.style.overflow = "hidden";
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                document.body.style.overflow = "";
            }, 1000);
        }, 2000);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('show-loading', handleShowLoading);
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading"
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950"
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0.5 }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Main Logo Container */}
                    <motion.div
                        className="flex flex-col items-center justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Pulsing Icon */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                filter: ["drop-shadow(0px 0px 0px rgba(16, 185, 129, 0))", "drop-shadow(0px 0px 20px rgba(16, 185, 129, 0.4))", "drop-shadow(0px 0px 0px rgba(16, 185, 129, 0))"]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image
                                src="/icone.webp"
                                alt="Tivor Icon"
                                width={72}
                                height={72}
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Typography Logo */}
                        <div className="text-4xl sm:text-5xl font-bold text-white tracking-[0.2em]">
                            TIVOR
                        </div>
                    </motion.div>

                    {/* Progress Bar Container */}
                    <motion.div
                        className="absolute bottom-20 flex flex-col items-center gap-5 w-full px-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        {/* The progress line */}
                        <div className="w-full max-w-[240px] h-[3px] bg-slate-800 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.2, ease: "easeInOut" }}
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.div
                            className="text-slate-400 text-xs font-medium tracking-[0.3em] uppercase ml-2 flex items-center gap-1"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        >
                            <span>{t.loading.text}</span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
                            >
                                .
                            </motion.span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, delay: 0.2, times: [0, 0.5, 1] }}
                            >
                                .
                            </motion.span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, delay: 0.4, times: [0, 0.5, 1] }}
                            >
                                .
                            </motion.span>
                        </motion.div>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
