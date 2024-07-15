import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const NEXT_PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN!;

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: `${NEXT_PUBLIC_DOMAIN}/sitemaps.xml`,
    }
}