import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';


export default function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/FrontolServiceAddon/FrontolServiceAddon.xml')) {
        const time = Date.now();
        console.log({time: time});
    }
    return i18nRouter(request, i18nConfig);

    //return NextResponse.next()


    //const path = req.nextUrl.pathname
    //const slug = path.slice(1)

    // Set a cookie on the response using the `ResponseCookies` API
    //const response = NextResponse.next()
    //response.cookies.set({name: 'middleware-slug', value: slug, path})
    //response.cookies.set( {name: 'middleware-slug', value: slug} )

    //const time = Date.now();
    //console.log({time: time});

    //return response
}

// only applies this middleware to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
};

//export const config = {
//    matcher: [
//        '/disclaimer', // match a single, specific page
//        '/((?!public|static).*)', // match all paths not starting with 'public' or 'static'
//    ],
//}
