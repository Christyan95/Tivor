"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, ArrowUpRight, Linkedin } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { toast } from "sonner";
import { submitContactForm } from "@/app/actions/contact";
import { SOCIAL_LINKS } from "@/lib/constants";

export const Contact = () => {
    const t = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const result = await submitContactForm(data);

            if (result.error) {
                throw new Error(result.error);
            }

            toast.success(t.contact.messages.success);
            reset();
        } catch (error: any) {
            console.error("Erro no envio:", error);
            toast.error(error.message || t.contact.messages.error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_70%)] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[10px] sm:text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200/60 rounded-full uppercase tracking-[0.25em] shadow-sm backdrop-blur-sm"
                    >
                        {t.contact.badge}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.05]"
                    >
                        {t.contact.titleLine1} <br />
                        <span className="text-cyan-700">{t.contact.titleLine2}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed px-4"
                    >
                        {t.contact.desc}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xl:gap-10 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 flex flex-col justify-between gap-5"
                    >
                        {[
                            { icon: Mail, text: t.contact.info.email, href: `mailto:${t.contact.info.email}` },
                            { icon: Phone, text: t.contact.info.phone, href: `https://wa.me/${t.contact.info.phone.replace(/\D/g, '')}` },
                            { icon: Linkedin, text: "LinkedIn Corporativo", href: SOCIAL_LINKS.LINKEDIN },
                            { icon: MapPin, text: t.contact.info.location, href: null }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-center gap-5 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-cyan-200 transition-all group cursor-default"
                            >
                                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center border border-cyan-100 shrink-0 transition-transform group-hover:scale-105">
                                    <item.icon className="text-cyan-600 w-5 h-5" />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    {item.href ? (
                                        <a href={item.href} target={item.icon === Phone ? "_blank" : undefined} rel={item.icon === Phone ? "noopener noreferrer" : undefined} className="text-slate-800 font-semibold text-sm sm:text-base hover:text-cyan-700 transition-colors flex items-center gap-2 truncate">
                                            {item.text}
                                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ) : (
                                        <span className="text-slate-800 font-semibold text-sm sm:text-base line-clamp-1">{item.text}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] space-y-6">
                            {/* Honeypot field - invisível para humanos */}
                            <input type="text" {...register("honeypot")} className="hidden" aria-hidden="true" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.contact.nameLabel}</label>
                                    <input
                                        type="text"
                                        {...register("name")}
                                        placeholder={t.contact.namePlaceholder}
                                        className={`w-full bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 sm:px-5 py-3.5 text-slate-800 text-sm font-medium focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder:text-slate-400`}
                                    />
                                    {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.contact.emailLabel}</label>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        placeholder={t.contact.emailPlaceholder}
                                        className={`w-full bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 sm:px-5 py-3.5 text-slate-800 text-sm font-medium focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder:text-slate-400`}
                                    />
                                    {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.contact.companyLabel}</label>
                                <input
                                    type="text"
                                    {...register("company")}
                                    placeholder={t.contact.companyPlaceholder}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 sm:px-5 py-3.5 text-slate-800 text-sm font-medium focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all placeholder:text-slate-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.contact.messageLabel}</label>
                                <textarea
                                    rows={5}
                                    {...register("message")}
                                    placeholder={t.contact.messagePlaceholder}
                                    className={`w-full bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-200'} rounded-xl px-4 sm:px-5 py-3.5 text-slate-800 text-sm font-medium focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all resize-none placeholder:text-slate-400`}
                                />
                                {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.message.message}</p>}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                className={`w-full py-4 bg-slate-900 text-white font-bold rounded-2xl ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-emerald-600'} transition-all flex items-center justify-center gap-3 text-sm shadow-lg hover:shadow-emerald-500/20 active:scale-95 duration-300 group`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        {t.contact.messages.sending}
                                    </>
                                ) : (
                                    <>
                                        {t.contact.submitButton}
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
