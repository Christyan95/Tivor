import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "en"];
const defaultLocale = "pt";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Exclude relative files and API
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) return;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Predict redirect using preferred language from headers or default to pt
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next|.*\\..*).*)',
    ],
}
