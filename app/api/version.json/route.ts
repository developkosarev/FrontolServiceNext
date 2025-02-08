import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-static'

export function GET(request: NextRequest) {
  const data = {
    message: 'Hello from Next.js!',
    method: request.method,
    //ip: request.ip
  }

  return NextResponse.json(data)
}
