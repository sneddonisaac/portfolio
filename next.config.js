/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src isaacsneddonjenkins.co.uk;
  style-src 'self' isaacsneddonjenkins.co.uk;
  font-src 'self';  
`

const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
    },
]

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['media.graphassets.com', 'images.unsplash.com'],
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ]
    },
}
