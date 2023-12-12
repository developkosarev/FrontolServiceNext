import { headers } from 'next/headers'

export async function GET(request: Request) {
  //const headersList = headers()
  //const referer: string = headersList.get('referer') as string
  const referer: string = '2';

  return new Response('Hello, users.js!', { status: 200, headers: { referer: referer } })
}
