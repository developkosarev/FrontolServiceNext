import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from "@/i18n-config";

const defaultLocale = 'ru'
const locales = ['ru', 'en']

function getLocale(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    
    // Если путь начинается с /en/, значит это английский язык
    if (pathname.startsWith('/en/')) {
        return 'en'
    }
    
    // В остальных случаях используем русский язык
    return defaultLocale
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    
    // Если путь начинается с /en/, пропускаем
    if (pathname.startsWith('/en/')) {
        return NextResponse.next()
    }
    
    // Если путь не начинается с /en/, проверяем, не пытаемся ли мы получить английскую версию
    //const acceptLanguage = request.headers.get('accept-language')
    //if (acceptLanguage?.includes('en')) {
    //    // Если пользователь предпочитает английский, добавляем префикс /en
    //    return NextResponse.redirect(
    //        new URL(`/en${pathname}`, request.url)
    //    )
    //}
    
    // В остальных случаях оставляем как есть (русский язык без префикса)
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        // Исключаем все внутренние пути Next.js
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}