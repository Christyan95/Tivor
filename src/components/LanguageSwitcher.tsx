"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n";

export const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (locale: Locale) => {
        if (!pathname) return;
        const paths = pathname.split("/");
        paths[1] = locale; // since the URL is like /pt, /en, /es
        router.push(paths.join("/"));
    };

    return (
        <div className="flex bg-white/50 border border-slate-200 rounded-full p-1 shadow-sm backdrop-blur-md">
            {(["pt", "en"] as Locale[]).map((loc) => {
                const isActive = pathname?.startsWith(`/${loc}`);
                return (
                    <button
                        key={loc}
                        onClick={() => handleLocaleChange(loc)}
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-300 ${isActive
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                            }`}
                    >
                        {loc}
                    </button>
                );
            })}
        </div>
    );
};
