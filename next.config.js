const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    //basePath: '/docs',
    //assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,    

    //output: isProd ? 'export': undefined,
    //distDir: isProd ? 'dist' : undefined
}

module.exports = nextConfig
