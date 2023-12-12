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
    }	
}

module.exports = nextConfig
