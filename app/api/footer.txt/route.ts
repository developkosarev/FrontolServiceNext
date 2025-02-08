import { headers } from 'next/headers'
import { Htag } from "@/components/Htag/Htag";

const isExport = process.env.APP_ENV_EXPORT === 'production'

export async function GET(request: Request) {
  let referer: string = 'export';

  if (!isExport) {
    const headersList = await headers()
    referer = headersList.get('referer') as string
  }

  //const body = `<Htag tag='h1'>Renderer. Рендер</Htag>`
  const body = `<H1>Renderer. Рендер</H1>`

  return new Response(body, {
        status: 200,
        headers: {
            referer: referer,
            'Content-Type': 'text/html; charset=utf-8'
        }
      })
}
