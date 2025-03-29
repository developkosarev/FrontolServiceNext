import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const NEXT_PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN!;

    return [
        {
            url: `${NEXT_PUBLIC_DOMAIN}`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_DOMAIN}/about`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_DOMAIN}/contact`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${NEXT_PUBLIC_DOMAIN}/overview`,
            lastModified: new Date(),
            priority: 1,
        },
    ]
}