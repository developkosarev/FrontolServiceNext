import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from "@/i18n-config";

function getLocale(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (pathname.startsWith('/en/')) {
        return 'en'
    }

    return i18n.defaultLocale
}

// This function can be marked `async` if using `await` inside
//export function middleware1(request: NextRequest) {
//    const pathname = request.nextUrl.pathname
//
//    // Если путь начинается с /en/, пропускаем
//    if (pathname.startsWith('/en/')) {
//        return NextResponse.next()
//    }
//
//    // Если путь не начинается с /en/, проверяем, не пытаемся ли мы получить английскую версию
//    //const acceptLanguage = request.headers.get('accept-language')
//    //if (acceptLanguage?.includes('en')) {
//    //    // Если пользователь предпочитает английский, добавляем префикс /en
//    //    return NextResponse.redirect(
//    //        new URL(`/en${pathname}`, request.url)
//    //    )
//    //}
//
//    // В остальных случаях оставляем как есть (русский язык без префикса)
//    return NextResponse.next()
//}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // // If you have one
    // if (
    //   [
    //     '/manifest.json',
    //     '/favicon.ico',
    //     // Your other files in `public`
    //   ].includes(pathname)
    // )
    //   return

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url,
            ),
        );
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        // Исключаем все внутренние пути Next.js
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}