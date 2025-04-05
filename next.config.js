const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isExport = process.env.APP_ENV_EXPORT === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {	
    //basePath: '/docs',
    //assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,    

    output: isExport ? 'export': undefined,
    distDir: isExport ? 'dist' : undefined,

    images: {
        unoptimized: isExport
    },
	
	sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    //async rewrites() {
    //    return [
    //        // Handle all paths that don't start with a locale
    //        // and point them to the default locale static param: (en)
    //        {
    //            source: '/:path((?!(?:ru|de|en)(?:/|$)).*)',
    //            destination: '/ru/:path*',
    //        },
    //        {
    //            source: '/de/kontakt',
    //            destination: '/de/contact',
    //            locale: false
    //        },
    //        {
    //            source: '/de/uber-uns',
    //            destination: '/de/about',
    //            locale: false // Use `locale: false` so that the prefix matches the desired locale correctly
    //        },
    //        {
    //            source: '/es/nosotros',
    //            destination: '/es/about',
    //            locale: false
    //        }
    //    ];
    //},
}

module.exports = nextConfig
