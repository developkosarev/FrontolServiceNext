import { headers } from 'next/headers'

const isExport = process.env.APP_ENV_EXPORT === 'production'

export async function GET(request: Request) {
  let referer: string = 'export';

  if (!isExport) {
    const headersList = headers()
    referer = headersList.get('referer') as string
  }

  const body = 'Hello, users.js!'

  return new Response(body, {
        status: 200,
        headers: { referer: referer }
      })
}
