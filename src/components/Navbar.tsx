"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLenis } from "lenis/react";
import { useTranslation } from "@/i18n/TranslationContext";
import { useParams, useRouter, usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useEffect } from "react";

const navLinks = [
    { key: "item1", href: "#top" },
    { key: "item4", href: "/hubjee" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslation();
    const locale = (params?.locale as string) || "pt";
    const lenis = useLenis();

    useEffect(() => {
        const handleScrollEvent = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    const handleScroll = (href: string) => {
        setIsOpen(false);
        const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

        // 1. Navigation with Loading (Home <-> HubJee)
        const isGoingToHub = href === "/hubjee";
        const isGoingToHomeFromOther = !isHomePage && (href === "#top" || href === "/");

        if (isGoingToHub || isGoingToHomeFromOther) {
            window.dispatchEvent(new CustomEvent('show-loading'));
            
            setTimeout(() => {
                const targetPath = isGoingToHub ? `/${locale}${href}` : `/${locale}`;
                router.push(targetPath);
            }, 600);
            return;
        }

        // 2. Standard Scroll for Anchors on Home
        if (href.startsWith("#")) {
            if (isHomePage) {
                const target = document.querySelector(href);
                if (target && lenis) {
                    lenis.scrollTo(target as HTMLElement, { 
                        duration: 2.0, 
                        easing: (t: number) => 1 - Math.pow(1 - t, 4) 
                    });
                }
            } else {
                router.push(`/${locale}${href}`);
            }
        } else {
            router.push(`/${locale}${href}`);
        }
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        
        // 1. Trigger global loading regardless of current page
        window.dispatchEvent(new CustomEvent('show-loading'));
        
        // 2. Perform clean navigation after animation starts
        setTimeout(() => {
            // Using router.push for SPA performance, but targeting base locale URL
            router.push(`/${locale}`);
            
            // If we are already on home, we might want to force a scroll to top 
            // after the router confirms the path
            if (pathname === `/${locale}` || pathname === `/${locale}/`) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }, 600);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-500 ease-in-out ${
                isScrolled 
                ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" 
                : "py-6 bg-transparent border-b border-transparent"
            }`}>
                {/* Logo */}
                <a 
                    href={`/${locale}`} 
                    onClick={handleLogoClick}
                    className="flex items-center gap-2 group"
                >
                    <Image
                        src="/icone.webp"
                        alt="Tivor Logo"
                        width={isScrolled ? 38 : 46}
                        height={isScrolled ? 38 : 46}
                        className="object-contain transition-all duration-500"
                        priority
                    />
                    <span className={`font-bold text-slate-900 tracking-tighter hidden sm:block transition-all duration-500 ${
                        isScrolled ? "text-xl" : "text-2xl"
                    }`}>TIVOR</span>
                </a>

                {/* Desktop Navigation */}
                <div className={`hidden lg:flex items-center gap-0 xl:gap-1 transition-all duration-500 ${
                    isScrolled ? "scale-100" : "scale-110"
                }`}>
                    {navLinks.map((link) => (
                        <button
                            key={link.key}
                            onClick={() => handleScroll(link.href)}
                            className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                                isScrolled 
                                ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                                : "text-slate-700 hover:text-slate-950 hover:bg-white/40"
                            } rounded-full`}
                        >
                            {(t.navbar as any)[link.key]}
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-xl transition-all ${
                            isScrolled ? "hover:bg-slate-100" : "hover:bg-white/20"
                        }`}
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
                        className={`fixed left-0 right-0 z-40 backdrop-blur-lg border-b border-slate-200 shadow-lg lg:hidden transition-all duration-500 ${
                            isScrolled ? "top-[65px] bg-white/95" : "top-[90px] bg-white/80"
                        }`}
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
