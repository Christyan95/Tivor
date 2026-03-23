import { dictionaries, Locale } from "@/i18n";
import { TranslationProvider } from "@/i18n/TranslationContext";
import HubJeeClient from "@/components/HubJeeClient";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
    const resolvedParams = await Promise.resolve(params);
    const locale = resolvedParams.locale as Locale;
    
    const meta = {
        pt: {
            title: "Hub Tecnológico Jee | Ecossistema TIVOR",
            description: "Conheça o Hub Tecnológico Jee: Um ecossistema completo de soluções de gestão, crédito e análise de risco integrado à excelência da TIVOR.",
        },
        en: {
            title: "Jee Technological Hub | TIVOR Ecosystem",
            description: "Explore the Jee Technological Hub: A complete ecosystem of management, credit, and risk analysis solutions integrated with TIVOR excellence.",
        },
    };

    const current = meta[locale] || meta.pt;

    return {
        title: current.title,
        description: current.description,
    };
}

export default async function HubJeePage({
    params
}: {
    params: Promise<{ locale: string }> | { locale: string }
}) {
    const resolvedParams = await Promise.resolve(params);
    const locale = resolvedParams.locale as Locale;
    const dict = dictionaries[locale] || dictionaries.pt;

    return (
        <TranslationProvider dictionary={dict}>
            <HubJeeClient locale={locale} />
        </TranslationProvider>
    );
}
