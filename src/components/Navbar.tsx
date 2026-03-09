"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLenis } from "lenis/react";
import { useTranslation } from "@/i18n/TranslationContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navLinks = [
    { key: "item1", href: "#context" },
    { key: "item2", href: "#challenges" },
    { key: "item3", href: "#opportunity" },
    { key: "item4", href: "#specialization" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();
    const t = useTranslation();

    const handleScroll = (href: string) => {
        setIsOpen(false);
        if (href.startsWith("#")) {
            const target = document.querySelector(href);
            if (target && lenis) {
                lenis.scrollTo(target as HTMLElement, { duration: 2.0, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
            }
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/icone.webp"
                        alt="Tivor Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
                    />
                    <span className="font-bold text-slate-800 text-xl tracking-tight hidden sm:block">TIVOR</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.key}
                            onClick={() => handleScroll(link.href)}
                            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all duration-200"
                        >
                            {(t.navbar as any)[link.key]}
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <button
                        onClick={() => handleScroll("#contact")}
                        className="hidden sm:block px-6 py-2.5 text-sm font-semibold text-white transition-all bg-emerald-600 rounded-full hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                        aria-label={t.navbar.cta}
                    >
                        {t.navbar.cta}
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[65px] left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-lg lg:hidden"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.key}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleScroll(link.href)}
                                    className="text-left px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
                                >
                                    {(t.navbar as any)[link.key]}
                                </motion.button>
                            ))}
                            <div className="pt-4 border-t border-slate-100 mt-2">
                                <button
                                    onClick={() => handleScroll("#contact")}
                                    className="w-full px-6 py-3 text-sm font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 active:scale-95 transition-all shadow-md"
                                >
                                    {t.navbar.cta}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
