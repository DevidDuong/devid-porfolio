import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { profile } from '@/data/profile'
import { siteUrl } from '@/lib/site'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const title = 'Duong Devid — Backend Software Engineer | Open Banking & Payments'
const description =
  'Backend Software Engineer in Cambodia specializing in Open Banking, payment systems, and FinTech APIs with Java, Spring Boot, NestJS, PostgreSQL, and Docker Swarm.'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: { '@type': 'PostalAddress', addressLocality: 'Phnom Penh', addressCountry: 'KH' },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ['Open Banking', 'Payment Systems', 'FinTech APIs', 'Java', 'Spring Boot', 'NestJS', 'PostgreSQL', 'Docker Swarm'],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  title,
  description,
  generator: 'v0.app',
  applicationName: 'Duong Devid Portfolio',
  authors: [{ name: 'Duong Devid' }],
  keywords: [
    'Backend Developer',
    'Software Engineer',
    'Open Banking',
    'Payment Systems',
    'FinTech',
    'Java',
    'Spring Boot',
    'NestJS',
    'PostgreSQL',
    'Docker Swarm',
    'Cambodia',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/hero-architecture.png', width: 1312, height: 816, alt: 'Backend architecture illustration' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero-architecture.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fc' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1020' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
