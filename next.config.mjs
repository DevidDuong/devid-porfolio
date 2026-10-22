const isProd = process.env.NODE_ENV === 'production'

// Static CSP without nonces, so pages stay statically rendered and CDN-cacheable
// (nonces would force dynamic rendering: https://nextjs.org/docs/app/guides/content-security-policy).
// 'unsafe-inline' is needed because Next.js and next-themes inject inline scripts, and
// Framer Motion sets inline styles. No 'unsafe-eval'. Vercel Analytics loads from the same origin.
// Production only: dev needs 'unsafe-eval' and websockets for HMR, and Safari breaks on
// upgrade-insecure-requests over http://localhost.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ')

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          ...(isProd ? [{ key: 'Content-Security-Policy', value: contentSecurityPolicy }] : []),
        ],
      },
    ]
  },
}

export default nextConfig
