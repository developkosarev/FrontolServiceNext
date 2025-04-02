import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log(1111)
    return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',

    // Matcher ignoring `/_next/` and `/api/`
    //matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", '/about/:path*'],
}