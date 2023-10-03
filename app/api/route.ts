import { NextResponse } from 'next/server'

export function GET() {
    const data = { message: 'Hello from Next.js!' }

    //return Response.json(data)
    return NextResponse.json(data)
}
