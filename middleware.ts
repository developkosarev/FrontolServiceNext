import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/FrontolServiceAddon/FrontolServiceAddon.xml')) {
        const time = Date.now();
        console.log({time: time});
    }

    return NextResponse.next()


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

//export const config = {
//    matcher: [
//        '/disclaimer', // match a single, specific page
//        '/((?!public|static).*)', // match all paths not starting with 'public' or 'static'
//    ],
//}
